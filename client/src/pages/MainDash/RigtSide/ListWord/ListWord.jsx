import React, { useEffect, useState } from 'react';
import './ListWord.css';
import TextService from '../../../../services/API/tex.service';
import { RES_DATA } from '../../../../Constant/global';
import dayjs from 'dayjs';

//Xử lý lại câu từ không nên tách đôi thành 2 phần html như kia

const ListWord = () => {
	const [listData, setListData] = useState([]);

	const getAllText = async () => {
		const res = await TextService.getAllText();

		console.log(res[RES_DATA]);
		setListData(res[RES_DATA].metadata);
	};

	useEffect(() => {
		getAllText();
	}, []);
	return (
		<div className="wrapper-list flex flex-col gap-5 p-2">
			{listData.length > 0 &&
				listData?.map((data, idx) => {
					if (data.typeText == 'word') {
						return (
							<div
								key={idx}
								className="detail-list flex flex-col gap-2 "
							>
								<div className="detail-list__top flex justify-between">
									<div className="flex gap-2">
										<div className="type-word px-2 w-fit rounded-lg">
											Từ
										</div>
										<div className="font-bold">{data.text}</div>
									</div>

									<div>{dayjs( data.createdAt).format('DD-MM-YYYY')}</div>
								</div>
								<div className="detail-list__bottom translate">
									<div>{data.defind}</div>
								</div>
							</div>
						);
					} else {
						return (
							<div
								key={idx}
								className="detail-list flex flex-col gap-2  "
							>
								<div className="detail-list__top flex justify-between">
									<div className="flex gap-2">
										<div className="type-sentence px-2 w-fit rounded-lg">
											Câu
										</div>
										<div className="font-bold">{data.attributes.structure}</div>
									</div>

									<div>{dayjs( data.createdAt).format('DD-MM-YYYY')}</div>
								</div>
								<div className="detail-list__bottom">
									<div>{data.text}</div>
									<div className="translate">{data.defind}</div>
								</div>
							</div>
						);
					}
				})}
		</div>
	);
};

export default ListWord;
