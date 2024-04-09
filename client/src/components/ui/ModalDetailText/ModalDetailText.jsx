import React, { useEffect, useState } from 'react';
import {
	UilEdit,
	UilTrashAlt,
	UilCancel,
} from '@iconscout/react-unicons';

function ModalDetailText({ openModalDetailText , onCancel}) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(openModalDetailText);
	}, [openModalDetailText]);



	return (
		<>
			{show && (
				<div className="absolute w-full h-full top-0 ">
					<div className="w-full absolute z-9  h-full bg-gray-300 fixed opacity-40" ></div>

					<div className="w-full fixed top-0 flex items-center h-full p-4" onClick={onCancel}>
						<div className="bg-white z-10 shadow-md w-full rounded-xl h-[50%] flex flex-col gap-6">
							<div className="w-full h-[75%] rounded-3xl shadow-md ">
								<div className="p-2 w-full flex justify-end bg-yellow-200 px-4">
									<div className="font-bold" onClick={onCancel}>X</div>
								</div>
								<div className="body p-2 leading-8">
									<div>Câu: what do you do?</div>
									<div>Nghĩa : bạn làm gì đấy</div>
									<div>Chủ để: đời sống</div>
									<div>Cấp độ : 7</div>
								</div>
							</div>

							<div className="flex gap-8 justify-center">
								<div className="border border-2 border-sky-600 rounded-full p-2 text-sky-500" onClick={onCancel}>
									<UilCancel />
								</div>
								<div className="border border-2 border-red-600 rounded-full p-2 text-red-500">
									<UilTrashAlt />
								</div>
								<div className="border border-2 border-yellow-500 rounded-full p-2 text-yellow-500">
									<UilEdit />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ModalDetailText;
