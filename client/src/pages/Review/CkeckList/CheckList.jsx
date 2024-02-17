import React from 'react';

function CheckList() {
	return (
		<>
			<div className="filter-check flex justify-between pt-4 pb-2">
				<div className="filter-level">
					<div className="filter mb-2">
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
				</div>
			</div>

			<div className="wrapper-lists flex flex-col gap-3 pt-6">
				<div className="detail-list flex flex-col gap-2 bg-slate-100 shadow-md p-2 rounded-lg">
					<div className="detail-list__top flex justify-between">
						<div className="flex gap-2">
							<div className="type-word px-2 w-fit rounded-lg">Từ</div>
							<div className="font-bold">play</div>
						</div>

						<div>20-11-2024</div>
					</div>
					<div className="detail-list__bottom flex justify-between translate">
						<div>kết nối</div>
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
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
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
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
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
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
						<div className="translate">cấp 1</div>
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
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
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
						<div className="bg-yellow-300 text-slate-500 p-1 h-fit text-xs align-center rounded-lg">Cấp 1</div>
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
						<div className="translate">cấp 1</div>
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
						<div className="translate">cấp 1</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CheckList;
