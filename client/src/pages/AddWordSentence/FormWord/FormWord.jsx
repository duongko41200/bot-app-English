import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { SET_USER } from '../../../store/feature/auth';
import TextService from '../../../services/API/tex.service';
import { toast, Toaster } from 'react-hot-toast'

const STEP_FINAL = 2;

function FormWord() {
	const [steps, setSteps] = useState([
		{ id: 1, step: 'step 1', path: '/step1', isActive: true },
		{ id: 2, step: 'step 2', path: '/step2', isActive: false },
		{ id: 3, step: 'step 3', path: '/step3', isActive: false },
	]);
	const [words, setWords] = useState('');
	const navigate = useNavigate();

	const wordText = useSelector((state) => state.wordStore.wordObject);
	const typeText = useSelector((state) => state.wordStore.typeText);
	const auth = useSelector((state) => state.authStore.user);
	const dispatch = useDispatch();

	//kiểm tra chỗ này nên để ra 1 nhánh bao tấtx cả các nhánh
	useEffect(() => {
		const userId = localStorage.getItem('userId');
		const accessToken = localStorage.getItem('accessToken');
		const user = localStorage.getItem('user');
		if (!user) {
			navigate('/login');
		} else {
			dispatch(SET_USER(user));
		}

		console.log({ userId, accessToken });
	}, []);

	const changeStep = async (step) => {
		// switch (step) {
		// 	case STEP_2:
		// 		await store.dispatch('global/getRestaurant');
		// 		break;
		// 	case STEP_3:
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

		console.log({ currentStepIndex });
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

	const handleSave = async() => {
		// logic Save

		// console.log('auth', JSON.parse(auth));
		let paramData = {
			...wordText,
			typeText,

		};
		try {
			const createWord = await TextService.createWord(paramData)

			toast.success('Thêm thành công ', {
				duration: 4000,
				position: 'top-right',
	
				// Styling
				style: {},
				className: '',
	
				// Aria
				ariaProps: {
					role: 'status',
					'aria-live': 'polite',
				},
			});
		

			
		} catch (error) {
			console.log({error})
		}

		navigate('/addElement');
		


	};

	return (
		<>
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
				<Toaster/>
			</div>

		</>
	);
}

export default FormWord;
