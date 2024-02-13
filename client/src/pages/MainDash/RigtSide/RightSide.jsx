import React from 'react';
import CustomerReview from '../../../components/CustomerReview/CustomerReview';
import ListWord from './ListWord/ListWord';
import './RightSide.css';

const RightSide = () => {
	return (
		<>
			<div className="RightSide">
				<div className="wrapper-title w-screen flex-col mb-2">
					<div className="flex justify-between w-screen">
						<div className="title-bar">Câu/từ đã nạp</div>
						<div className="title-detail">xem hết</div>
					</div>
				</div>
			</div>
			<ListWord />
		</>
	);
};

export default RightSide;
