import React from 'react';
import { NavLink } from 'react-router-dom';

function AddWordSentence() {
	return (
		<>
			<div className="w-full flex flex-col gap-10 h-[400px] p-2 pt-10">
				{/* <div className="flex justify-center">
					<div className="text-orange-400 font-medium text-lg">
						Hôm nay bạn thích học gì nhỉ! 😀
					</div>
				</div> */}
				<div className="flex justify-center">
					<div className="flex flex-col gap-2">
						<NavLink to="/formWord" id="sign-in-btn">
							<div className="border flex justify-center  items-center min-w-[200px]  min-h-[150px] p-2 text-center text-4xl font-medium bg-bnt-word rounded shadow">
								<div>Từ</div>
							</div>
						</NavLink>

						<NavLink to="/formSentence" id="sign-in-btn">
						<div className="border flex justify-center  items-center min-w-[200px]  min-h-[150px] p-2 text-center text-4xl font-medium bg-btn-sentence rounded shadow">
								<div>Câu</div>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddWordSentence;
