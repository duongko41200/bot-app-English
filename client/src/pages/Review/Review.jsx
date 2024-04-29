import React, { useState } from 'react';
import './Review.css';
import { Link, Outlet } from 'react-router-dom';
import ModalDetailText from '../../components/ui/ModalDetailText/ModalDetailText';
import { useDispatch, useSelector } from 'react-redux';
import { SET_OPEN_MODAL_DETAIL_TEXT } from '../../store/feature/word';

function Review() {
	const openModalDetailText = useSelector(
		(state) => state.wordStore.openModalDetailText
	);
	const textDetail = useSelector(
		(state) => state.wordStore.textDetail
	);

	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(SET_OPEN_MODAL_DETAIL_TEXT(false));
	};

	return (
		<div className="wrapper-analysis relative">
			<div className="pie flex flex-col">
				<div className="header-pie px-4 py-2">
					<div className="sub-header">Tàng kinh các </div>
					<div className="italic text-gray-400">
						chọn vào mục bạn muốn xem
					</div>
				</div>
			</div>
			<div className="menu px-4 py-4 flex justify-between">
				<Link to="/review" className="p-2 bg-cyan-200 rounded-xl">
					Câu/từ
				</Link>
				<Link to="review/check" className="p-2 bg-red-200 rounded-xl">
					Ôn tập
				</Link>
				<Link
					to="review/pendding"
					className="p-2 bg-yellow-200 rounded-xl"
				>
					Sắp ôn
				</Link>
			</div>

			<div className="bg-white body-review rounded-t-2xl px-4 py-4 ">
				<Outlet />
			</div>

			<ModalDetailText
				openModalDetailText={openModalDetailText}
				textDetail={textDetail}
				onCancel={handleCloseModal}
			/>
		</div>
	);
}

export default Review;
