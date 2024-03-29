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
					<div className="flex flex-col gap-2 pt-10">
						<NavLink to="/formWord" id="sign-in-btn">
							<div className="border flex justify-center  items-center min-w-[350px]  min-h-[120px] p-2 text-center text-4xl border border-4 font-medium bg-bnt-word rounded shadow-md">
								<div>Từ</div>
							</div>
						</NavLink>

						<NavLink to="/formSentence" id="sign-in-btn">
						<div className="border flex justify-center border border-4  items-center min-w-[350px]  min-h-[120px] p-2 text-center text-4xl font-medium bg-btn-sentence rounded shadow-md">
								<div>Câu</div>
							</div>
						</NavLink>

						<div className='pt-10 text-lg italic font-medium  text-orange-400'>*Hãy chọn vào thứ bạn muốn học</div>
					</div>
					
				</div>
			</div>
		</>
	);
}

export default AddWordSentence;
