import React, { useEffect, useState } from 'react';
import TextService from '../../../services/API/tex.service';
import { RES_DATA } from '../../../Constant/global';
import dayjs from 'dayjs';
import SpinnerLoading from '../../../components/ui/SpinnerLoading/SpinnerLoading';

function PenddingCheck() {
	const [listPending, setListPending] = useState([]);
	const [isShow, setIsShow] = useState(false);

	const handleData = async () => {
		const localStoragePeding = JSON.parse(
			localStorage.getItem('listPending')
		);

		console.log({ localStoragePeding });

		if (
			localStoragePeding?.length > 0 &&
			localStoragePeding[RES_DATA]?.dayReview ===
				dayjs(new Date()).format('YYYY/MM/DD')
		) {
			console.log('list exist');
			setListPending(localStoragePeding);
			return;
		}

		try {
			setIsShow(true)
			const data = await TextService.getListPendding();
			const response = data[RES_DATA].metadata.contents;
			console.log('data:', data[RES_DATA].metadata.contents);
			setListPending(response);
			setIsShow(false)

			localStorage.setItem('listPending', JSON.stringify(response));
		} catch (error) {
			console.log({ error });
			setIsShow(false)
		}
	};

	useEffect(() => {
		handleData();
	}, []);
	return (
		<>
			<div className="filter-check flex justify-between pt-4 pb-2">
				<div className="filter-level">
					<div className="filter mb-2">
						<div className="flex justify-between">
							<div>
								<div className=" font-bold">
									Danh sách cần nâng cấp trong hôm nay
								</div>
								{/* <div className="text-gray-400 text-sm italic">
									Ấn vào từ để ôn tập nào!
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			<SpinnerLoading show={isShow}>
				{isShow ? (
					<div className="w-full h-[300px]"></div>
				) : (
					<div className="wrapper-lists flex flex-col gap-3 pt-6">
						{listPending.length > 0 ? (
							listPending.map((list, idx) => {
								return (
									<>
										<div
											key={idx}
											className="detail-list flex flex-col gap-2   p-2 rounded-lg"
										>
											<div className="detail-list__top flex justify-between">
												<div className="flex gap-2">
													<div
														className={`${
															list.typeText === 'word'
																? 'type-word'
																: 'type-sentence'
														} px-2 w-fit rounded-lg`}
													>
														{list.typeText === 'word' ? 'Từ' : 'Câu'}
													</div>

													{list.typeText === 'word' ? (
														<div className="font-bold">{list.text}</div>
													) : (
														<div className="font-bold">
															{list.attributes.structure}
														</div>
													)}
												</div>

												<div className="text-right min-w-[92px]">
													{dayjs(list.createdAt).format('DD-MM-YYYY')}
												</div>
											</div>
											<div className="detail-list__bottom flex justify-between">
												<div className="w-[85%]">
													{list.typeText === 'sentence' && (
														<div>{list.text}</div>
													)}
													<div className="translate">{list.defind}</div>
												</div>

												<div className="bg-[#EDC349] text-white p-1 h-fit text-xs align-center rounded-lg">
													Cấp {list.repeat}
												</div>
											</div>
										</div>
									</>
								);
							})
						) : (
							<>
								<div className="w-full h-[300px]">
									Hôm nay, bạn sẽ không phải ôn tập ( nhưng bạn cũng có
									thể tự ôn lại các danh sách từ cũ)
								</div>
							</>
						)}
					</div>
				)}
			</SpinnerLoading>
		</>
	);
}

export default PenddingCheck;
