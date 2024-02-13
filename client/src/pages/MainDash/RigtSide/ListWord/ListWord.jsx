import React from 'react';
import './ListWord.css';
import { ListData } from '../../../../Data/Data';

const ListWord = () => {
	return (
		<div className="wrapper-list flex flex-col gap-5 p-2">
			{ListData.length > 0 &&
				ListData.map((data, idx) => {
					if (data.type == 'word') {
						return (
							<div key={idx} className="detail-list flex flex-col gap-2 ">
								<div className="detail-list__top flex justify-between">
									<div className="flex gap-2">
										<div className="type-word px-2 w-fit rounded-lg">
											Từ
										</div>
										<div className="font-bold">{data.text}</div>
									</div>

									<div>{data.createAt}</div>
								</div>
								<div className="detail-list__bottom translate">
									<div>{data.translate}</div>
								</div>
							</div>
						);
					} else {
						return (
							<div  key={idx} className="detail-list flex flex-col gap-2  ">
								<div className="detail-list__top flex justify-between">
									<div className="flex gap-2">
										<div className="type-sentence px-2 w-fit rounded-lg">
											Câu
										</div>
										<div className="font-bold">{data.structure}</div>
									</div>

									<div>{data.createAt}</div>
								</div>
								<div className="detail-list__bottom">
									<div>{data.text}</div>
									<div className="translate">{data.translate}</div>
								</div>
							</div>
						);
					}
				})}
		</div>
	);
};

export default ListWord;
