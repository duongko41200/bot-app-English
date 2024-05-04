import React, { useEffect, useState } from 'react';
import {
	UilEdit,
	UilTrashAlt,
	UilTimes,
} from '@iconscout/react-unicons';
import { useDispatch } from 'react-redux';
import { SET_OPEN_MODAL_BOTTOM } from '../../../store/general';

function ModalDetailText({
	openModalDetailText,
	onCancel,
	textDetail,
	deleteTextById
}) {
	const [show, setShow] = useState(false);

	const dispatch = useDispatch()

	const OpenModalEdit = () => {
		dispatch(SET_OPEN_MODAL_BOTTOM(true))
	}

	useEffect(() => {
		setShow(openModalDetailText);
		console.log({ textDetail });
	}, [openModalDetailText]);

	return (
		<>
			{show && (
				<div className="absolute w-full h-full top-0 flex justify-center">
					<div className="w-full absolute z-9  h-full bg-gray-300 fixed opacity-40"></div>

					<div
						className="w-[90%] fixed top-0 flex items-center h-full p-4"
						onClick={onCancel}
					>
						<div className="bg-white z-10 shadow-md w-full rounded-xl h-fit flex flex-col gap-4 p-4">
							<div className="p-2 w-full flex justify-between bg-white px-4">
								<div className="font-bold" onClick={onCancel}>
									<UilTimes />
								</div>
								<div className="flex gap-4">
									<div onClick={deleteTextById}>
										<UilTrashAlt />
									</div>
									<div onClick={OpenModalEdit}>
										<UilEdit />
									</div>
								</div>
							</div>
							<div className="w-full h-[75%] shadow-md bg-[#fef9c373]">
								{/* <div>
									<div className="flex items-center">
										<div className={`  px-2 w-fit rounded-lg `}>
											Câu
										</div>
									</div>
								</div> */}
								<div className="body min-h-[200px] p-4 rounded-4xl leading-8">
									{textDetail?.typeText === 'word' ? (
										<>
											<div>Từ: {textDetail.text}</div>
											<div>Nghĩa : {textDetail.defind}</div>
											<div>Chủ để: {textDetail?.topicId?.name}</div>
											<div>Cấp độ : {textDetail.repeat}</div>
										</>
									) : (
										<>
											<div>Câu: {textDetail.text}</div>
											<div>
												Cấu trúc: {textDetail.attributes.structure}
											</div>
											<div>Nghĩa : {textDetail.defind}</div>
											<div>Chủ để: {textDetail?.topicId?.name}</div>
											<div>Cấp độ : {textDetail.repeat}</div>
										</>
									)}
								</div>
							</div>

							{/* <div className="flex gap-8 justify-center">
								<div className="border border-2 border-sky-600 rounded-full p-2 text-sky-500" onClick={onCancel}>
									<UilCancel />
								</div>
								<div className="border border-2 border-red-600 rounded-full p-2 text-red-500">
									<UilTrashAlt />
								</div>
								<div className="border border-2 border-yellow-500 rounded-full p-2 text-yellow-500">
									<UilEdit />
								</div>
							</div> */}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ModalDetailText;
