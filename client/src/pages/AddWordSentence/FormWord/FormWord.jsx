import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import TextService from '../../../services/API/tex.service';
import { Toaster } from 'react-hot-toast';
import {
	LIMIT_TEXT_OF_PAGE,
	RES_DATA,
	STEPS_ADD_WORD_SENTENCE,
} from '../../../Constant/global';
import { ToastError, ToastSuccess } from '../../../utils/Toast';
import {
	CREATE_SUCCESS,
	NOT_REQUIRED_DEFIND,
	NOT_REQUIRED_TOPIC,
	NOT_REQUIRED_WORD,
} from '../../../Constant/toast';
import { RESET_WORD } from '../../../store/feature/word';
import SpinnerLoading from '../../../components/ui/SpinnerLoading/SpinnerLoading';

const STEP_FINAL = 2;

function FormWord() {
	const [steps, setSteps] = useState([
		{ id: 1, step: 'step 1', path: '/step1', isActive: true },
		{ id: 2, step: 'step 2', path: '/step2', isActive: false },
		{ id: 3, step: 'step 3', path: '/step3', isActive: false },
	]);
	const [isShow, setIsShow] = useState(false);

	const navigate = useNavigate();

	const wordText = useSelector((state) => state.wordStore.wordObject);
	const typeText = useSelector((state) => state.wordStore.typeText);
	const dispatch = useDispatch();

	const changeStep = async (step) => {
		// switch (step) {
		// 	case STEPS_ADD_WORD_SENTENCE.STEP_1:

		// 		break;
		// 	case STEPS_ADD_WORD_SENTENCE.STEP_2:
		// 		await store.dispatch('global/getDish');
		// 		break;
		// 	case STEP_REVIEW:
		// 		await store.dispatch('global/getReview');
		// 		break;
		// 	default:
		// 		break;
		// }
		navigate(`/formWord${steps[step].path}`);
	};

	const handlePrevious = () => {
		const currentStepIndex = steps.findIndex((step) => step.isActive);

		if (currentStepIndex > 0) {
			setSteps((prevSteps) => {
				prevSteps[currentStepIndex].isActive = false;
				prevSteps[currentStepIndex - 1].isActive = true;
				return prevSteps;
			});
			changeStep(currentStepIndex - 1);
		} else {
			navigate('/addElement');
		}
	};

	const handleNext = () => {
		// handle Next
		const currentStepIndex = steps.findIndex((step) => step.isActive);

		if (
			currentStepIndex === STEPS_ADD_WORD_SENTENCE.STEP_0 &&
			!wordText.text
		) {
			ToastError(NOT_REQUIRED_WORD);
			return;
		}

		if (
			currentStepIndex === STEPS_ADD_WORD_SENTENCE.STEP_1 &&
			!wordText.defind
		) {
			ToastError(NOT_REQUIRED_DEFIND);
			return;
		}

		if (
			currentStepIndex !== -1 &&
			currentStepIndex < steps.length - 1
		) {
			setSteps((prevSteps) => {
				prevSteps[currentStepIndex].isActive = false;
				prevSteps[currentStepIndex + 1].isActive = true;
				return prevSteps;
			});
			// dispatch(SET_WORD(words));
			changeStep(currentStepIndex + 1);
		}
	};

	const handleSave = async () => {
		// logic Save

		if (!wordText.topicId) {
			ToastError(NOT_REQUIRED_TOPIC);

			return;
		}

		let paramData = {
			...wordText,
			typeText,
		};
		try {
			setIsShow(true);

			const createWord = await TextService.createWord(paramData);

			//save localStorage từ mới

			let dataLocal = JSON.parse(localStorage.getItem('listText'));
			if (dataLocal.length >= LIMIT_TEXT_OF_PAGE) {
				dataLocal.unshift(createWord[RES_DATA].metadata);
				dataLocal.pop();
			} else {
				dataLocal.unshift(createWord[RES_DATA].metadata);
			}
			localStorage.setItem('listText', JSON.stringify(dataLocal));
			/// sử lý tổng số trang :--- 1.Lưu số từ mỗi khi thêm mới-----2. lấy tổng/limit để ra số trang dùng làm trỏn cli- check backend dã dùng
			/// nhiều thiết bị đòng bộ localStorage

			ToastSuccess(CREATE_SUCCESS);
			dispatch(RESET_WORD());
			setIsShow(false);
		} catch (error) {
			console.log({ error });
			setIsShow(false);
		}

		navigate('/addElement');
	};

	return (
		<>
			<SpinnerLoading show={isShow}>
				<div className="w-full h-[300px] p-2 pt-10">
					<div className="min-h-[170px]">
						<Outlet />
					</div>
					<div className="w-full flex justify-between mt-5">
						<div
							className="border min-w-[75px] py-2 text-center rounded shadow-sm font-medium"
							onClick={handlePrevious}
						>
							Pre
						</div>

						{steps[STEP_FINAL].isActive ? (
							<div
								className="border min-w-[75px] py-2 text-center rounded shadow-sm bg-sky-300 font-medium"
								onClick={handleSave}
							>
								Save
							</div>
						) : (
							<div
								className="border min-w-[75px] py-2 text-center rounded shadow-sm"
								onClick={handleNext}
							>
								Next
							</div>
						)}
					</div>
					<Toaster />
				</div>
			</SpinnerLoading>
		</>
	);
}

export default FormWord;
