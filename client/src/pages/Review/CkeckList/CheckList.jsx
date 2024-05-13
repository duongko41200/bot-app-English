import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import TextService from '../../../services/API/tex.service';
import { RES_DATA } from '../../../Constant/global';

function CheckList() {
	const [open, setOpen] = useState(false);

	const [listChecking, setListChecking] = useState([]);

	const fetchData = async () => {
		const localStorageChecking = JSON.parse(
			localStorage.getItem('listChecking')
		)
			? JSON.parse(localStorage.getItem('listChecking'))
			: [];

		console.log({ localStorageChecking });

		const localStorageDayPeding = localStorage.getItem('dayPending');
		if (
			localStorageDayPeding != dayjs(new Date()).format('YYYY/MM/DD')
		) {
			try {
				const data = await TextService.getListPendding();
				const response = data[RES_DATA].metadata.contents;
				console.log('data:', response);
				localStorage.setItem(
					'dayPending',
					dayjs(new Date()).format('YYYY/MM/DD')
				);

				const dataRequest = {
					day: dayjs(new Date()).format('YYYY/MM/DD'),
					metaData: response,
				};

				localStorage.setItem(
					'listChecking',
					JSON.stringify([dataRequest, ...localStorageChecking])
				);

				setListChecking([dataRequest, ...localStorageChecking]);
			} catch (error) {
				console.log({ error });
				setIsShow(false);
			}
		} else {
			setListChecking(localStorageChecking);
		}
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
				<div
					className={`detail-list flex flex-col gap-2 shadow-md  border rounded-lg ${
						open ? 'bg-[#eef5bd6c]' : 'bg-slate-100'
					}`}
					onClick={() => setOpen(!open)}
				>
					{listChecking &&
						listChecking.map((value) => {
							return (
								<>
									<div
										className={`detail-list__top flex justify-between pt-2 px-2 rounded-b-xl ${
											!open ? 'pb-3' : 'bg-slate-200 pb-3'
										}`}
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

									{open && (
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
											class="px-1 h-fit bg-[#eef5bd6c] py-2 flex flex-col gap-1"
										>
											{value.metaData &&
												value.metaData?.map((value, idx) => {
													return (
														<div
															key={idx}
															className=" flex flex-col gap-2 shadow-md p-2 rounded-md border bg-slate-100 px-4"
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
														</div>
													);
												})}
										</motion.div>
									)}
								</>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default CheckList;
