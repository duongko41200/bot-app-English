import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CheckList() {
	return (
		<>
			<div className="filter-check flex justify-center pt-4 pb-2 border rounded-t-3xl rounded-b-xl bg-[#ecec5ea3]  shadow-md">
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

					<div className='border-t-2 pt-2 '>
						<select
							id="level"
							className="font-bold bg-[#ecec5ea3]"
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
				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className=" px-2 w-fit rounded-lg">
								<ArrowDropDownIcon />
							</div>
							<div className="font-bold flex items-end text-sm text-end">
								<div>20-11-2024</div>
							</div>
						</div>

						<div className="text-sm italic text-gray-400 flex items-end ">
							<div>Tổng: 12 câu/từ</div>
						</div>
					</div>
					{/* <div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
					</div> */}
				</div>

				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className=" px-2 w-fit rounded-lg">
								<ArrowDropDownIcon />
							</div>
							<div className="font-bold flex items-end text-sm text-end">
								<div>20-11-2024</div>
							</div>
						</div>

						<div className="text-sm italic text-gray-400 flex items-end ">
							<div>Tổng: 12 câu/từ</div>
						</div>
					</div>
					{/* <div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
					</div> */}
				</div>

				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className=" px-2 w-fit rounded-lg">
								<ArrowDropDownIcon />
							</div>
							<div className="font-bold flex items-end text-sm text-end">
								<div>20-11-2024</div>
							</div>
						</div>

						<div className="text-sm italic text-gray-400 flex items-end ">
							<div>Tổng: 12 câu/từ</div>
						</div>
					</div>
					{/* <div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
					</div> */}
				</div>

				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className=" px-2 w-fit rounded-lg">
								<ArrowDropDownIcon />
							</div>
							<div className="font-bold flex items-end text-sm text-end">
								<div>20-11-2024</div>
							</div>
						</div>

						<div className="text-sm italic text-gray-400 flex items-end ">
							<div>Tổng: 12 câu/từ</div>
						</div>
					</div>
					{/* <div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
					</div> */}
				</div>

				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className=" px-2 w-fit rounded-lg">
								<ArrowDropDownIcon />
							</div>
							<div className="font-bold flex items-end text-sm text-end">
								<div>20-11-2024</div>
							</div>
						</div>

						<div className="text-sm italic text-gray-400 flex items-end ">
							<div>Tổng: 12 câu/từ</div>
						</div>
					</div>
					{/* <div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default CheckList;
