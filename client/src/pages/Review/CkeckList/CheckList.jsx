import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import TextService from '../../../services/API/tex.service';
import { RES_DATA } from '../../../Constant/global';
import DetailChecking from './DetailChecking/DetailChecking.jsx';
import { Box } from '@mui/material';

function CheckList() {
	const [openModalTest, setOpenModalTest] = useState(false);

	const [listChecking, setListChecking] = useState([]);
	const [textChoose, setTextChoose] = useState('');
	const [level, setLevel] = useState('');

	const fetchData = async () => {
		try {
			const currentDay = dayjs(new Date()).format('YYYY/MM/DD');

			// Lấy dữ liệu từ localStorage
			let localStorageChecking =
				JSON.parse(localStorage.getItem('listChecking')) || [];
			const localStorageDayPending = localStorage.getItem('dayPending');

			// Kiểm tra nếu ngày trong localStorage khác với ngày hiện tại
			if (localStorageDayPending !== currentDay) {
				const data = await TextService.getListPendding();
				const response = data[RES_DATA].metadata.contents;

				// Cập nhật ngày pending và danh sách pending trong localStorage
				localStorage.setItem('dayPending', currentDay);
				localStorage.setItem('listPending', JSON.stringify(response)); //danh sách sẽ học trong hôm nay

				if (response?.length > 0) {
					const dataRequest = {
						day: currentDay,
						metaData: response,
						isShow: false,
					};

					// Cập nhật danh sách checking trong localStorage
					localStorageChecking.unshift(dataRequest);
					localStorage.setItem(
						'listChecking',
						JSON.stringify(localStorageChecking)
					);
				}
			}

			// Cập nhật state của listChecking
			setListChecking(localStorageChecking);
		} catch (error) {
			console.log({ error });
			setIsShow(false);
		}
	};

	const handleOpenListChek = (valueCheck) => {
		console.log({ valueCheck, listChecking });
		let cloneListChecking = structuredClone(listChecking);
		cloneListChecking = cloneListChecking.map((value, idx) => {
			if (value.day == valueCheck.day) {
				value.isShow = !value.isShow;
			}

			return value;
		});

		setListChecking(cloneListChecking);
	};
	const handleShowListTest = (value) => {
		console.log('value text:', value);
		setOpenModalTest(true);
		setTextChoose(value.text);
		setLevel(value.repeat);
	};
	const closeModalBottom = () => {
		setOpenModalTest(false);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<div className={`filter-check flex justify-start pt-4  pb-2 `}>
				<div className="filter-level">
					<div className="filter mb-2 ">
						<div className="flex justify-between">
							<div>
								<div className=" font-bold">
									Đến giờ nâng cấp câu/từ của bạn rồi
								</div>
								<div className="text-gray-400 text-sm italic">
									Ấn vào các khung bên dưới để ôn tập nào!
								</div>
							</div>
						</div>
					</div>

					<div className="border-t-2 pt-2">
						<select
							id="level"
							className="font-bold bg-white"
							// value={currentLevel}
						>
							<option value="all">Hàng tháng</option>
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

			<div className="wrapper-lists flex flex-col gap-3 pt-4">
				<div className={`detail-list flex flex-col gap-3 rounded-lg`}>
					{listChecking &&
						listChecking.map((value, idx) => {
							return (
								<div key={idx}>
									<div
										className={`detail-list__top flex justify-between pt-2 px-2 rounded-t-xl bg-slate-100 border shadow-md ${
											!value.isShow
												? 'pb-3 rounded-b-xl'
												: 'bg-slate-200 pb-3'
										} `}
										key={idx}
										onClick={() => handleOpenListChek(value)}
									>
										<div className="flex gap-2">
											<div className=" px-2 w-fit rounded-lg">
												<ArrowDropDownIcon />
											</div>
											<div className="font-bold flex items-end text-sm text-end">
												<div>{value.day}</div>
											</div>
										</div>

										<div className="text-sm italic text-gray-400 flex items-end ">
											<div>Tổng: {value.metaData?.length} câu/từ</div>
										</div>
									</div>

									{value.isShow && (
										<motion.div
											key="content"
											initial="collapsed"
											animate="open"
											exit="collapsed"
											variants={{
												open: { y: 0, height: 'auto' },
												collapsed: { y: 0, height: 0 },
											}}
											transition={{
												duration: 0,
												ease: [0.04, 0.62, 0.23, 0.98],
											}}
											className="px-1 h-fit bg-[#eef5bd6c] py-2 flex flex-col gap-1 border shadow-md"
										>
											{value.metaData &&
												value.metaData?.map((value, idx) => {
													return (
														<Box
															key={idx}
															className=" flex flex-col gap-2 shadow-md p-2 rounded-md border bg-slate-100 px-4"
															onClick={() => handleShowListTest(value)}
														>
															<div className="detail-list__top flex justify-between">
																<div className="flex gap-2">
																	<div className="flex items-center">
																		<div
																			className={` ${
																				value.typeText === 'word'
																					? 'type-word'
																					: 'type-sentence'
																			} px-2 w-fit rounded-lg text-sm `}
																		>
																			{value.typeText === 'word'
																				? 'Từ'
																				: 'Câu'}
																		</div>
																	</div>

																	{value.typeText === 'word' ? (
																		<div className="font-bold text-sm">
																			{value.text}
																		</div>
																	) : (
																		<div className="font-bold text-sm">
																			{value.attributes.structure}
																		</div>
																	)}
																</div>

																<div className="text-right min-w-[92px] text-sm">
																	{dayjs(value.createdAt).format(
																		'DD-MM-YYYY'
																	)}
																</div>
															</div>
															<div className="detail-list__bottom flex justify-between">
																<div className="w-[85%] text-sm">
																	{value.typeText === 'sentence' && (
																		<div>{value.text}</div>
																	)}
																	<div className="translate text-sm">
																		{value.defind}
																	</div>
																</div>

																<div className="bg-[#EDC349] text-white p-1 h-fit text-xs align-center rounded-lg">
																	Cấp {value.repeat}
																</div>
															</div>
														</Box>
													);
												})}
										</motion.div>
									)}
								</div>
							);
						})}
				</div>
			</div>

			<DetailChecking
				open={openModalTest}
				closeModalBottom={closeModalBottom}
				text={textChoose}
				level={level}
			></DetailChecking>
		</>
	);
}

export default CheckList;
