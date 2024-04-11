import React, { useEffect, useState } from 'react';
import ListWord from './ListWord/ListWord';
import './RightSide.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_LIST_DATA,
	SET_TOTAL_PAGE,
	getAllText,
} from '../../../store/feature/word';
import SpinnerLoading from '../../../components/ui/SpinnerLoading/SpinnerLoading';
import { LIMIT_TEXT_OF_PAGE } from '../../../Constant/global';

const RightSide = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [isShow, setIsShow] = useState(false);

	const totalPages = useSelector((state) => state.wordStore.totalPages);
	const listData = useSelector((state) => state.wordStore.listData);
	const dispatch = useDispatch();

	const handleChangePage = async (event, value) => {
		setCurrentPage(value);
		if (currentPage != value) {
			setIsShow(true);
			await dispatch(getAllText({ page: value,limit:LIMIT_TEXT_OF_PAGE }));
			setIsShow(false);
		}
	};

	const getListData = async () => {
		const listText = JSON.parse(localStorage.getItem('listText'));
		const totalPage = localStorage.getItem('totalPages');

		if (listText) {
			dispatch(SET_LIST_DATA(listText));
			dispatch(SET_TOTAL_PAGE(totalPage));
		} else {
			setIsShow(true);
			await dispatch(
				getAllText({ page: currentPage, limit: LIMIT_TEXT_OF_PAGE })
			);
			setIsShow(false);
		}
	};

	useEffect(() => {
		getListData();
	}, []);
	return (
		<>
			<div className="RightSide">
				<div className="wrapper-title w-screen flex-col mb-2">
					<div className="flex justify-between w-screen pr-5">
						<div className="title-bar">Câu/từ đã nạp</div>
						<div className="title-detail !no-underline">
							<Stack spacing={2}>
								{/* <Pagination count={10} shape="rounded" /> */}
								<Pagination
									count={Number(totalPages)}
									variant="outlined"
									shape="rounded"
									size="small"
									defaultPage={1}
									siblingCount={0}
									onChange={handleChangePage}
									disabled={isShow}
								/>
							</Stack>
						</div>
					</div>
				</div>
			</div>

			<SpinnerLoading show={isShow}>
				<ListWord />
			</SpinnerLoading>
		</>
	);
};

export default RightSide;
