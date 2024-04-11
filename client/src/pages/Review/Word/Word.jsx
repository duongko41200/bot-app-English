import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_OPEN_MODAL_DETAIL_TEXT } from '../../../store/feature/word';
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
	const [listText, setListText] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isShow, setIsShow] = useState(false);
	const [totalPage,setTotalPage]=useState('')

	const dispatch = useDispatch();

	const handleShowModalDetail = () => {
		dispatch(SET_OPEN_MODAL_DETAIL_TEXT(true));
	};

	const fetchDataListText = async () => {
		setIsShow(true);
		const resListText = await TextService.getListTextByFilter({
			page: currentPage,
			limit: LIMIT_LIST_TEXT_OF_PAGE,
		});

		console.log(resListText[RES_DATA]?.metadata);

		const data = resListText[RES_DATA]?.metadata;
		setListText(data);
		setTotalPage(resListText[RES_DATA]?.metadata.totalPages)
		setIsShow(false);
	};
	
	const handleChangePage = async (event, value) => {
		setCurrentPage(value);
		
	};

	useEffect(() => {
		fetchDataListText();
	}, [currentPage]);
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
										<select id="level" className="bg-yellow-100 ">
											<option value="volvo">Volvo</option>
											<option value="saab">Saab</option>
											<option value="vw">VW</option>
											<option value="audi" selected>
												tất cả
											</option>
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
							<select id="type" className="bg-yellow-100 ">
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="vw">VW</option>
								<option value="audi" selected>
									tất cả
								</option>
							</select>
						</div>
					</div>

					<div className="filter-date">
						<div className="flex">
							<div className="bg-yellow-100 rounded-l-lg">
								<div className="text-sm px-1">Tháng</div>
								<select id="cars" className="bg-yellow-100 ">
									<option value="volvo">Volvo</option>
									<option value="saab">Saab</option>
									<option value="vw">VW</option>
									<option value="audi" selected>
										11
									</option>
								</select>
							</div>
							<div className="bg-yellow-100 rounded-r-lg">
								<div className="text-sm px-1">Năm</div>
								<select id="cars" className="bg-yellow-100 ">
									<option value="volvo">Volvo</option>
									<option value="saab">Saab</option>
									<option value="vw">VW</option>
									<option value="audi" selected>
										2024
									</option>
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
							count={totalPage}
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
					<div>{ `${ (currentPage -1 ) * LIMIT_LIST_TEXT_OF_PAGE + listText?.contents?.length} / ${listText.total}`}</div>
				</div>
			</div>

			{/* list word */}

			<SpinnerLoading show={isShow}>
				<div className="wrapper-lists flex flex-col gap-3 pt-4 ">
					{listText?.contents?.length > 0 &&
						listText?.contents.map((word, idx) => {
							return (
								<div
									key={idx}
									className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg"
									onClick={handleShowModalDetail}
								>
									<div className="detail-list__top flex justify-between">
										<div className="flex gap-2">
											<div
												className={`type-word ${
													word.typeText === 'word'
														? 'type-word'
														: 'type-sentence'
												} px-2 w-fit rounded-lg`}
											>
												{word.typeText === 'word' ? 'Từ' : 'Câu'}
											</div>

											{word.typeText === 'word' ? (
												<div className="font-bold">{word.text}</div>
											) : (
												<div className="font-bold">
													{word.attributes.structure}
												</div>
											)}
										</div>

										<div>
											{dayjs(word.createdAt).format('DD-MM-YYYY')}
										</div>
									</div>
									<div className="detail-list__bottom flex justify-between">
										<div>
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

					{/* <div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-word px-2 w-fit rounded-lg">Từ</div>
							<div className="font-bold">connect</div>
						</div>

						<div>20-11-2024</div>
					</div>
					<div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-[#FFA01B] text-white p-1 h-fit text-xs align-center rounded-lg">
							Cấp 2
						</div>
					</div>
				</div>

				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-word px-2 w-fit rounded-lg">Từ</div>
							<div className="font-bold">connect</div>
						</div>

						<div>20-11-2024</div>
					</div>
					<div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-[#C61F2B] text-white p-1 h-fit text-xs align-center rounded-lg">
							Cấp 3
						</div>
					</div>
				</div>

				<div className="detail-list flex flex-col gap-2  bg-slate-100 shadow-md p-2 rounded-lg  ">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-sentence px-2 w-fit rounded-lg">
								Câu
							</div>
							<div className="font-bold">S + Want + to + V</div>
						</div>

						<div>22-1-2024 </div>
					</div>
					<div className="detail-list__bottom flex justify-between">
						<div>
							<div>I want to go to school</div>
							<div className="translate">Tôi muốn tới trường</div>
						</div>
						<div className="translate bg-[#C61F2B] text-white p-1 h-fit text-xs align-center rounded-lg">
							Cấp 3
						</div>
					</div>
				</div>

				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-word px-2 w-fit rounded-lg">Từ</div>
							<div className="font-bold">connect</div>
						</div>

						<div>20-11-2024</div>
					</div>
					<div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-[#6E314F] text-white p-1 h-fit text-xs align-center rounded-lg">
							Cấp 4
						</div>
					</div>
				</div>

				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-word px-2 w-fit rounded-lg">Từ</div>
							<div className="font-bold">connect</div>
						</div>

						<div>20-11-2024</div>
					</div>
					<div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-[#502380] text-white p-1 h-fit text-xs align-center rounded-lg">
							Cấp 5
						</div>
					</div>
				</div>

				<div className="detail-list flex flex-col gap-2  bg-slate-100 shadow-md p-2 rounded-lg  ">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-sentence px-2 w-fit rounded-lg">
								Câu
							</div>
							<div className="font-bold">S + Want + to + V</div>
						</div>

						<div>22-1-2024 </div>
					</div>
					<div className="detail-list__bottom flex justify-between">
						<div>
							<div>I want to go to school</div>
							<div className="translate">Tôi muốn tới trường</div>
						</div>
						<div className="translate bg-[#0A3161] text-white p-1 h-fit text-xs align-center rounded-lg">
							Cấp 6
						</div>
					</div>
				</div>

				<div className="detail-list flex flex-col gap-2  bg-slate-100 shadow-md p-2 rounded-lg  ">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-sentence px-2 w-fit rounded-lg">
								Câu
							</div>
							<div className="font-bold">S + Want + to + V</div>
						</div>

						<div>22-1-2024 </div>
					</div>
					<div className="detail-list__bottom flex justify-between">
						<div>
							<div>I want to go to school</div>
							<div className="translate">Tôi muốn tới trường</div>
						</div>
						<div className="translate bg-[#3E8F78] text-white p-1 h-fit text-xs align-center rounded-lg">
							Cấp 7
						</div>
					</div>
				</div> */}
				</div>
			</SpinnerLoading>
		</>
	);
}

export default Word;
