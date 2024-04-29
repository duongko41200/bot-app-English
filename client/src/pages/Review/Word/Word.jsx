import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_LIST_DATA,
	SET_OPEN_MODAL_DETAIL_TEXT,
	SET_TOTAL_PAGE,
	SET_TOTAL_TEXT,
	getAllText,
	getListTextByFilter,
} from '../../../store/feature/word';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextService from '../../../services/API/tex.service';
import {
	LIMIT_LIST_TEXT_OF_PAGE,
	RES_DATA,
} from '../../../Constant/global';
import dayjs from 'dayjs';
import SpinnerLoading from '../../../components/ui/SpinnerLoading/SpinnerLoading';

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

	const totalPages = useSelector(
		(state) => state.wordStore.totalPagesReview
	);
	const listData = useSelector(
		(state) => state.wordStore.listTextReview
	);
	const totalText = useSelector(
		(state) => state.wordStore.totalListTextReview
	);
	const dispatch = useDispatch();

	const handleChangePage = async (event, value) => {
		if (currentPage != value) {
			// setIsShow(true);
			// dispatch(
			// 	getAllText({ page: value, limit: LIMIT_LIST_TEXT_OF_PAGE })
			// );
			// setIsShow(false);
			setCurrentPage(value);
		}
	};

	const getListData = async () => {
		const listText = JSON.parse(localStorage.getItem('listTextReview'));
		const totalPage = localStorage.getItem('totalPages');
		const totalText = localStorage.getItem('total');

		if (listText) {
			dispatch(SET_LIST_DATA(listText));
			dispatch(SET_TOTAL_PAGE(totalPage));
			dispatch(SET_TOTAL_TEXT(totalText));
		} else {
			setIsShow(true);
			dispatch(
				getListTextByFilter({
					page: currentPage,
					limit: LIMIT_LIST_TEXT_OF_PAGE,
					level: currentLevel,
					typeText: currentTypeText,
					date: `${selectedYear}-${selectedMonth}`,
				})
			);
			setIsShow(false);
		}
	};

	const handleShowModalDetail = () => {
		dispatch(SET_OPEN_MODAL_DETAIL_TEXT(true));
	};

	useEffect(() => {
		getListData();
	}, [
		currentPage,
		selectedMonth,
		currentLevel,
		currentTypeText,
		selectedYear,
	]);
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
									onChange={(e) => setSelectedMonth(e.target.value)}
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
									onChange={(e) => setSelectedYear(e.target.value)}
								>
									<option value="2024" selected>
										2024
									</option>
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
							defaultPage={1}
							siblingCount={0}
							onChange={handleChangePage}
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
										onClick={handleShowModalDetail}
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
		</>
	);
}

export default Word;
