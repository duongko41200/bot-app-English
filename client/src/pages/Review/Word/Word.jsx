import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_OPEN_MODAL_DETAIL_TEXT,
	SET_TEXT_DETAIL,
	getListTextByFilter,
	SET_ELEMENT_FILTER,
} from '../../../store/feature/word';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {
	LIMIT_LIST_TEXT_OF_PAGE,
	RES_DATA,
} from '../../../Constant/global';
import dayjs from 'dayjs';
import SpinnerLoading from '../../../components/ui/SpinnerLoading/SpinnerLoading';
import { SET_OPEN_MODAL_BOTTOM } from '../../../store/general';
import ModalBottom from '../../../components/ui/ModalBottom/ModalBottom';
import { LABEL_EDIT } from '../../../Constant/review';

function Word() {
	const [currentPage, setCurrentPage] = useState(1);
	const [isShow, setIsShow] = useState(false);
	const currentMonth = new Date().getMonth() + 1;
	const currentYear = new Date().getFullYear();

	const [selectedMonth, setSelectedMonth] = useState(
		currentMonth.toString()
	);
	const [selectedYear, setSelectedYear] = useState(
		currentYear.toString()
	);
	const [currentLevel, setCurrentLevel] = useState('all');
	const [currentTypeText, setCurrentTypeText] = useState('all');
	const [textUpdate, setTextUpdate] = useState({});

	/// REDUX

	const dispatch = useDispatch();
	const totalPages = useSelector(
		(state) => state.wordStore.totalPagesReview
	);
	const listData = useSelector(
		(state) => state.wordStore.listTextReview
	);
	const totalText = useSelector(
		(state) => state.wordStore.totalListTextReview
	);
	const open = useSelector(
		(state) => state.generalStore.openModalBottom
	);
	// const textDetail = useSelector((state) => state.wordStore.textDetail);

	// FUNCTION HANDLE
	const handleChangePage = async (event, value) => {
		if (currentPage != value) {
			setIsShow(true);
			// dispatch(
			// 	getAllText({ page: value, limit: LIMIT_LIST_TEXT_OF_PAGE })
			// );

			setCurrentPage(value);
			await dispatch(
				SET_ELEMENT_FILTER({
					content: value,
					type: 'page',
				})
			);

			await dispatch(
				getListTextByFilter({
					page: value,
					limit: LIMIT_LIST_TEXT_OF_PAGE,
					level: currentLevel,
					typeText: currentTypeText,
					date: `${selectedYear}-${selectedMonth}`,
				})
			);
			setIsShow(false);
		}
	};

	const getListData = async () => {
		// const listText = JSON.parse(localStorage.getItem('listTextReview'));
		// const totalPage = localStorage.getItem('totalPages');
		// const totalText = localStorage.getItem('total');

		// if (listText) {
		// 	dispatch(SET_LIST_DATA(listText));
		// 	dispatch(SET_TOTAL_PAGE(totalPage));
		// 	dispatch(SET_TOTAL_TEXT(totalText));
		// } else {
		setIsShow(true);
		dispatch(
			SET_ELEMENT_FILTER({
				content: 1,
				type: 'page',
			})
		);
		await dispatch(
			getListTextByFilter({
				page: '1',
				limit: LIMIT_LIST_TEXT_OF_PAGE,
				level: currentLevel,
				typeText: currentTypeText,
				date: `${selectedYear}-${selectedMonth}`,
			})
		);
		setIsShow(false);
		// }
	};

	const handleShowModalDetail = (textId) => {
		// console.log('Text  id:', textId);
		const textDetail = listData.filter((text) => text._id === textId);
		// console.log({ textDetail });

		const newTextDetail = {
			text: textDetail[0].text,
			defind: textDetail[0].defind,
			typeText: textDetail[0].typeText,
			structure: textDetail[0].attributes?.structure,
			spelling: textDetail[0].attributes?.spelling,
			topic:  textDetail[0].topicId?.name,
			topicId:  textDetail[0].topicId?._id,
		};

		// console.log({ newTextDetail });

		setTextUpdate(newTextDetail);

		dispatch(SET_OPEN_MODAL_DETAIL_TEXT(true));
		dispatch(SET_TEXT_DETAIL(textDetail[RES_DATA]));
	};

	const handleSetTextUpdate = (value, e) => {
		const copyTextUpdate = structuredClone(textUpdate);

		copyTextUpdate[value] = e.target.value;

		setTextUpdate(copyTextUpdate);

		console.log({ textUpdate });
	};

	const closeModalBottom = () => {
		dispatch(SET_OPEN_MODAL_BOTTOM(false));
	};

	useEffect(() => {
		setCurrentPage(1);

		getListData();
	}, [selectedMonth, currentLevel, currentTypeText, selectedYear]);
	return (
		<>
			<div>
				<div className="filter-check flex justify-between pt-4 pb-2 h-[100px] ">
					<div className="filter-level">
						<div className="filter mb-2">
							<div className="flex justify-between">
								<div>
									<div className="bg-yellow-100 rounded-lg">
										<div className="text-sm px-1">
											<label for="level">Cấp độ</label>
										</div>
										<select
											id="level"
											className="bg-yellow-100 "
											value={currentLevel}
											onChange={(e) => {
												setCurrentLevel(e.target.value);
												dispatch(
													SET_ELEMENT_FILTER({
														content: e.target.value,
														type: 'level',
													})
												);
											}}
										>
											<option value="all">tất cả</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="filter-type">
						<div className="bg-yellow-100 rounded-lg">
							<div className="text-sm px-1">
								<label for="type">Phân loại</label>
							</div>
							<select
								id="type"
								className="bg-yellow-100 "
								value={currentTypeText}
								onChange={(e) => {
									setCurrentTypeText(e.target.value);
									dispatch(
										SET_ELEMENT_FILTER({
											content: e.target.value,
											type: 'typeText',
										})
									);
								}}
							>
								<option value="word">Từ</option>
								<option value="sentence">Câu</option>
								<option value="all">tất cả</option>
							</select>
						</div>
					</div>

					<div className="filter-date">
						<div className="flex">
							<div className="bg-yellow-100 rounded-l-lg">
								<div className="text-sm px-1">Tháng</div>
								<select
									id="cars"
									className="bg-yellow-100"
									value={selectedMonth}
									onChange={(e) => {
										setSelectedMonth(e.target.value);
										dispatch(
											SET_ELEMENT_FILTER({
												content: `${selectedYear}-${e.target.value}`,
												type: 'date',
											})
										);
									}}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="11">11</option>
									<option value="12">12</option>
								</select>
							</div>
							<div className="bg-yellow-100 rounded-r-lg">
								<div className="text-sm px-1">Năm</div>
								<select
									id="cars"
									className="bg-yellow-100 "
									value={selectedYear}
									onChange={(e) => {
										setSelectedYear(e.target.value);
										dispatch(
											SET_ELEMENT_FILTER({
												content: `${e.target.value}-${selectedMonth}`,
												type: 'date',
											})
										);
									}}
								>
									<option value="2024">2024</option>
									<option value="2025">2025</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* pagination */}
			<div className="flex justify-between">
				<div>
					<Stack spacing={2}>
						{/* <Pagination count={10} shape="rounded" /> */}
						<Pagination
							count={totalPages}
							variant="outlined"
							shape="rounded"
							size="small"
							defaultPage={currentPage}
							siblingCount={0}
							onChange={handleChangePage}
							page={currentPage}
							disabled={isShow}
						/>
					</Stack>
				</div>
				<div className="font-medium px-2 bg-[#fefe8b] rounded w-fit flex justify-center items-center">
					<div>{`${
						(currentPage - 1) * LIMIT_LIST_TEXT_OF_PAGE +
						listData?.length
							? (currentPage - 1) * LIMIT_LIST_TEXT_OF_PAGE +
							  listData?.length
							: 0
					} / ${totalText ? totalText : 0}`}</div>
				</div>
			</div>

			{/* list word */}

			<SpinnerLoading show={isShow}>
				{isShow ? (
					<div className="w-full h-[300px]"></div>
				) : (
					<div className="wrapper-lists flex flex-col gap-3 pt-4 ">
						{listData?.length > 0 &&
							listData?.map((word, idx) => {
								return (
									<div
										key={idx}
										className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg"
										onClick={() => handleShowModalDetail(word._id)}
									>
										<div className="detail-list__top flex justify-between">
											<div className="flex gap-2">
												<div className="flex items-center">
													<div
														className={` ${
															word.typeText === 'word'
																? 'type-word'
																: 'type-sentence'
														} px-2 w-fit rounded-lg `}
													>
														{word.typeText === 'word' ? 'Từ' : 'Câu'}
													</div>
												</div>

												{word.typeText === 'word' ? (
													<div className="font-bold">{word.text}</div>
												) : (
													<div className="font-bold">
														{word.attributes.structure}
													</div>
												)}
											</div>

											<div className="text-right min-w-[92px]">
												{dayjs(word.createdAt).format('DD-MM-YYYY')}
											</div>
										</div>
										<div className="detail-list__bottom flex justify-between">
											<div className="w-[85%]">
												{word.typeText === 'sentence' && (
													<div>{word.text}</div>
												)}
												<div className="translate">{word.defind}</div>
											</div>

											<div className="bg-[#EDC349] text-white p-1 h-fit text-xs align-center rounded-lg">
												Cấp {word.repeat}
											</div>
										</div>
									</div>
								);
							})}
					</div>
				)}
			</SpinnerLoading>

			<ModalBottom
				open={open}
				label={LABEL_EDIT}
				closeModalBottom={closeModalBottom}
			>
				<div className="flex h-full ">
					<div className="flex flex-col gap-4 mb-4 w-full rounded-xl">
						<div>
							<input
								type="text"
								className="border border-black rounded p-2 w-full"
								value={textUpdate.text}
								onChange={(e) => handleSetTextUpdate('text', e)}
								placeholder={`Nhập ${
									textUpdate.typeText === 'word' ? 'từ' : 'câu'
								}...(bắt buộc)`}
							/>
						</div>

						{textUpdate.typeText &&
							textUpdate.typeText === 'sentence' && (
								<div>
									<input
										type="text"
										className="border border-black rounded p-2 w-full"
										value={textUpdate.structure}
										onChange={(e) =>
											handleSetTextUpdate('structure', e)
										}
										placeholder="Cấu trúc câu (S + V + O)"
									/>
								</div>
							)}

						<div>
							<input
								type="text"
								className="border border-black rounded p-2 w-full"
								placeholder="Nhập nghĩa từ..."
								value={textUpdate.defind}
								onChange={(e) => handleSetTextUpdate('defind', e)}
							/>
						</div>

						{textUpdate.typeText && textUpdate.typeText === 'word' && (
							<div>
								<input
									type="text"
									className="border border-black rounded p-2 w-full"
									placeholder="Phiên âm"
									value={textUpdate.spelling}
									onChange={(e) => handleSetTextUpdate('spelling', e)}
								/>
							</div>
						)}
						<div>
							<div className="flex justify-between border border-black bg-white rounded p-2 w-full">
								<div className="flex items-center">
									<div className="text-lg font-meduim">Chủ đề:</div>
								</div>
								<div className="border p-2 min-w-[100px] text-center bg-sky-200 shadow-md rounded-lg font-meduim">
									↗️ {textUpdate.topic}
								</div>
							</div>
							{/* <input
								type="text"
								className="border border-black rounded p-2 w-full"
								placeholder="Nhập nghĩa từ..."
								value={textDetail.topicId.name}
								// onChange={handleSetText}
							/> */}
						</div>
					</div>
				</div>
			</ModalBottom>
		</>
	);
}

export default Word;
