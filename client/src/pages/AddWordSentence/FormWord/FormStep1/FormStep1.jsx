import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_WORD } from '../../../../store/feature/word';

function FormStep1() {
	const [text, setText] = useState('');
	const dispatch = useDispatch()

	const handleSetText = (e) => {
		setText(e.target.value);
		// setWords((word) => {
		// 	return {...word, text: e.target.value};
		// });
		dispatch(SET_WORD({text: e.target.value}))

	};
	return (
		<div className="w-ful flex justify-center">
			<div className="flex flex-col gap-10">
				<div className="text-center text-orange-400 font-medium">
					Nhập từ mà bạn muốn ghi nhớ 😽
				</div>
				<div>
					<input
						type="text"
						className="border p-2 w-full"
						value={text}
						onChange={handleSetText}
						placeholder="Nhập từ..."
					/>
				</div>
			</div>
		</div>
	);
}

export default FormStep1;
