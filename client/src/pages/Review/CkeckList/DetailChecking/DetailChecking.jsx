import React, { useEffect, useState, useMemo } from 'react';
import CustomModalMotion from '../../../../components/ui/CustomFormModal/CustomModalMotion';
import { Box } from '@mui/material';
import SpinnerLoading from '../../../../components/ui/SpinnerLoading/SpinnerLoading';
import ResultsLevel1 from '../../../../components/CustomFormResult/ResultsLevel1';
import {
	FORM_COMPONENTS,
	getProps,
} from '../../../../Constant/DetailChecking';
import { useQuiz } from '../../../../hook/useQuiz';
import { useSubmitQuiz } from '../../../../hook/useSubmitQuiz';
import { getGeminiAi } from '../../../../services/AI/Gemini';

const DetailChecking = ({ open, closeModalBottom,text }) => {
	const {
		question,
		currentStep,
		handleStepChange,
		handleSelected,
		setQuestion,
	} = useQuiz();
	const { isSubmit, countScore, setIsSubmit, handleSubmit } =
		useSubmitQuiz(question);
	const [showSpinner, setShowSpinner] = useState(false);

	const handleSaveUpdate = async () => {
		setShowSpinner(true);
		try {
			const reponseOfGemini = await getGeminiAi(
				1,
				text
			);

			console.log({ reponseOfGemini });
			setQuestion(reponseOfGemini.question);
		} catch (error) {
			console.error('Error generating content:', error);
		} finally {
			setShowSpinner(false);
		}
	};

	const formProps = useMemo(
		() => ({
			question,
			currentStep,
			handleNextStep: () => handleStepChange(1),
			handleBackStep: () => handleStepChange(-1),
			handleSelected,
			handleSaveUpdate,
			handleSubmit,
		}),
		[
			question,
			currentStep,
			handleStepChange,
			handleSelected,
			handleSubmit,
		]
	);

	const FormComponent = FORM_COMPONENTS[1];
	const props = getProps(1, formProps);

	useEffect(() => {
		setIsSubmit(false);
		if (open) {
			handleSaveUpdate();
		}
	}, [open]);

	return (
		<CustomModalMotion
			open={open}
			closeModalBottom={closeModalBottom}
			handleSaveUpdate={handleSaveUpdate}
			showButtonSave={false}
			padding={0}
			bgcolor="#fff"
		>
			<SpinnerLoading show={showSpinner}>
				{!showSpinner ? (
					!isSubmit ? (
						<FormComponent {...props} />
					) : (
						<ResultsLevel1 result={countScore} question={question} text={text} />
					)
				) : (
					<Box
						sx={{
							width: '100%',
							height: '500px',
							background: '#aec0dd38',
							border: '1px solid hsl(215, 15%, 89%)',
							borderRadius: '30px',
							boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
						}}
					></Box>
				)}
			</SpinnerLoading>
		</CustomModalMotion>
	);
};

export default DetailChecking;
