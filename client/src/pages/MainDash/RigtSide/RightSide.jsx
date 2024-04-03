import React, { useEffect, useState } from 'react';
import ListWord from './ListWord/ListWord';
import './RightSide.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { getAllText } from '../../../store/feature/word';

const RightSide = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useDispatch();

	const handleChangePage = (event, value) => {
		setCurrentPage(value);
	};

	useEffect(() => {
		dispatch(getAllText({ page: currentPage }));
	}, [currentPage]);
	return (
		<>
			<div className="RightSide">
				<div className="wrapper-title w-screen flex-col mb-2">
					<div className="flex justify-between w-screen pr-5">
						<div className="title-bar">Câu/từ đã nạp</div>
						<div className="title-detail">
							<Stack spacing={2}>
								{/* <Pagination count={10} shape="rounded" /> */}
								<Pagination
									count={100}
									variant="outlined"
									shape="rounded"
									size="small"
									defaultPage={1}
									siblingCount={0}
									onChange={handleChangePage}
								/>
							</Stack>
						</div>
					</div>
				</div>
			</div>
			<ListWord />
		</>
	);
};

export default RightSide;
