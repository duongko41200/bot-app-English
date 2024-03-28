import React from 'react';
import { NavLink } from 'react-router-dom';

function AddWordSentence() {
	return (
		<>
			<div className="w-full flex flex-col gap-10 h-[400px] border border-red p-2 pt-10">
				<div className="flex justify-center">
					<div className="text-orange-400 font-medium text-lg">
						Hôm nay bạn thích học gì nhỉ! 😀
					</div>
				</div>
				<div className="flex justify-center">
					<div className="flex flex-col gap-2">
						<NavLink to="/formWord" id="sign-in-btn">
							<div className="border min-w-[150px] p-2 text-center text-lg font-medium bg-bnt-word rounded shadow">
								Từ
							</div>
						</NavLink>

						<NavLink to="/formSentence" id="sign-in-btn">
							<div className="border min-w-[150px] p-2 text-center text-lg font-medium rounded shadow bg-btn-sentence">
								Câu
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddWordSentence;
