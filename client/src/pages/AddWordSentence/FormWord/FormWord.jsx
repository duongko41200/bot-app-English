import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function FormWord() {
	const [steps, setSteps] = useState([
		{ id: 1, step: 'step 1', path: '/step1', isActive: true },
		{ id: 2, step: 'step 2', path: '/step2', isActive: false },
		{ id: 3, step: 'step 3', path: '/step3', isActive: false },
	]);
	const navigate = useNavigate();

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
			changeStep(currentStepIndex + 1);
		}
	};

	return (
		<>
			<div className="w-full h-[300px] p-2 pt-10">
				<div className="h-[170px]">
					<Outlet />
				</div>
				<div className="w-full flex justify-between">
					<div
						className="border min-w-[70px] py-2 text-center rounded shadow-sm"
						onClick={handlePrevious}
					>
						Pre
					</div>
					<div
						className="border min-w-[70px] py-2 text-center rounded shadow-sm"
						onClick={handleNext}
					>
						Next
					</div>
				</div>
			</div>
		</>
	);
}

export default FormWord;
