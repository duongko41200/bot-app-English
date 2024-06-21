import React, { useEffect, useState } from 'react';
import CustomModalMotion from '../../../../components/ui/CustomFormModal/CustomModalMotion';
import { Box, Button, Checkbox, Input, Radio } from '@mui/material';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Ensure this import is correct
import SpinnerLoading from '../../../../components/ui/SpinnerLoading/SpinnerLoading';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, {
	linearProgressClasses,
} from '@mui/material/LinearProgress';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function DetailChecking({ open, closeModalBottom }) {
	const [content, setContent] = useState('');
	const [prompts, setPrompts] = useState('');
	const [showSpiner, setShowSpiner] = useState(false);
	const [question, setQuestion] = useState([
		{
			id: 0,
			questions: 'What is the capital of Australia?',
			options: [
				{ name: 'Sydney', isCheck: false },
				{ name: 'Melbourne', isCheck: false },
				{ name: 'Canberra', isCheck: false },
			],
			answer: 'Canberra',
		},
		{
			id: 1,
			questions: 'What is the smallest country in the world?',
			options: [
				{ name: 'Monaco', isCheck: false },
				{ name: 'Nauru', isCheck: false },
				{ name: 'Tuvalu', isCheck: false },
			],
			answer: 'Monaco',
		},
		{
			id: 2,
			questions: 'What is the largest planet in our solar system?',
			options: [
				{ name: 'Sydney', isCheck: false },
				{ name: 'Melbourne', isCheck: false },
				{ name: 'Canberra', isCheck: false },
			],
			answer: 'Jupiter',
		},
	]);
	const [currentStep, setCurrentStep] = useState(0);

	// api coze pat_HaMwxs5mbWCvDHGAPfti7r39DS0QopFnroedGuRL7CL8fan4TcJ8QseITfiTM3rv

	const handleNextStep = () => {
		let currentStepClone = structuredClone(currentStep);

		if (currentStepClone < question.length - 1) {
			setCurrentStep(currentStepClone + 1);
		}
	};

	const handleBackStep = () => {
		let currentStepClone = structuredClone(currentStep);

		if (currentStepClone > 0) {
			console.log('ksdjfksdjf');
			setCurrentStep(currentStepClone - 1);
		}
	};

	const handleSelected = (id) => {
		let questionsClone = structuredClone(question);
		let CurrenQuestion = questionsClone[currentStep].options;

		CurrenQuestion = CurrenQuestion.map((value, idx) => {
			if (idx === id) {
				value.isCheck = true;
			} else {
				value.isCheck = false;
			}
		});

		console.log({ questionsClone });

		setQuestion(questionsClone);
	};

	const handleSaveUpdate = async () => {
		setContent('');
		setShowSpiner(true);
		try {
			// const model = genAI.getGenerativeModel({
			// 	model: 'gemini-1.5-flash',
			// });
			// const prompt = `you are a quiz master. generate 3 radom questions with 3 multiple choice answers. Also provide the answer separeately. The response should be in the following Json Format:{"question":[{"id":0,"questions":"", "options":[],"answer":""},...}]}`;
			// const result = await model.generateContent(prompt);
			// const response = result.response;
			// const text = response.text();
			// setShowSpiner(false);
			// setContent(text);
		} catch (error) {
			setShowSpiner(false);
			console.error('Error generating content:', error);
		}
	};

	const handleChangeValue = (e) => {
		setPrompts(e.target.value);
	};

	useEffect(() => {
		setContent('');
	}, [open]);

	return (
		<>
			<CustomModalMotion
				open={open}
				closeModalBottom={closeModalBottom}
				handleSaveUpdate={handleSaveUpdate}
				showButtonSave={false}
				padding={0}
				bgcolor="#fff"
			>
				{/* <Box sx={{}}>
					<Inputfde0476c
						id="outlined-basic"
						label="CHAT AI"
						variant="outlined"
						fullWidth
						placeholder="Chat AI"
						onChange={handleChangeValue}
					/>
				</Box>
				<SpinnerLoading show={showSpiner}>
					<Box
						sx={{
							position: 'relative',
							margin: '10px 0',
							minHeight: '100px',
							width: '100%',
							borderRadius: '5px',
							backgroundColor: '#f9f5f5e8',
							maxHeight: '300px',
							overflowY: 'auto',
							fontFamily: 'auto',
							fontSize: '14px',
							padding: '8px',
						}}
					>
						{content}
					</Box>
				</SpinnerLoading> */}
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
				>
					{/* /////// Question/////////////// */}
					<Box
						sx={{
							color: 'hsl(215, 15%, 12%)',
							display: 'flex',
							justifyContent: 'center',
							width: '100%',
						}}
					>
						<Box
							sx={{
								width: '100%',
								padding: '10px 8px',
								minHeight: '200px',
								background: '#397ded38',
								border: '1px solid hsl(215, 15%, 89%)',
								borderRadius: '15px',
								boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
								display: 'flex',
								gap: '10px',
							}}
						>
							<Box
								sx={{
									width: 'fit-content',
									minWidth: '40px',
									padding: '10px 5px',
									minHeight: '100%',
									background: '#397ded38',
									border: '1px solid hsl(215, 15%, 89%)',
									borderRadius: '30px',
									boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
									display: 'flex',
									flexDirection: 'column',
									gap: '3px',
								}}
							>
								<Box
									sx={{
										width: '100%',
										height: 'fit-content',
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									<Box
										sx={{
											borderRadius: '10px',
											width: '30px',
											height: '30px',
											background: '#fff',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Box>1</Box>
									</Box>
								</Box>

								<Box
									sx={{
										width: '100%',
										height: 'fit-content',
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									<Box
										sx={{
											borderRadius: '10px',
											width: '30px',
											height: '30px',
											background: '#fff',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										<Box>1</Box>
									</Box>
								</Box>
							</Box>

							<Box
								sx={{
									width: '100%',
									padding: '10px 20px',
									minHeight: '100px',
									background: '#397ded38',
									border: '1px solid hsl(215, 15%, 89%)',
									borderRadius: '20px',
									boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
									display: 'flex',
									flexDirection: 'column',
									gap: 2,
								}}
							>
								<Box
									sx={{
										fontSize: '25px',
										fontWeight: 'bold',
										textAlign: 'center',
									}}
								>
									Question:
								</Box>

								<Box
									sx={{
										fontSize: '16px',
									}}
								>
									{question[currentStep].questions}
								</Box>
							</Box>
						</Box>
					</Box>

					<Box sx={{ padding: '0 5px' }}>
						{question[currentStep].options &&
							question[currentStep].options.map((option, idx) => {
								return (
									<Box
										sx={{
											width: '100%',
											minHeight: '50px',
											background: `${
												option.isCheck ? '#1976d291' : '#fff'
											}`,
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
											padding: '5px',
											boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
											border: ` solid ${
												option.isCheck
													? '2px #1976d291'
													: '1px #00000042'
											}`,
											borderRadius: '10px',
											marginTop: '8px',
											color: `  ${option.isCheck ? '#fff' : 'back'}`,
											fontWeight: '700',
										}}
										onClick={() => handleSelected(idx)}
									>
										<Box>{option.name}</Box>
										<Box>
											<Checkbox
												icon={<RadioButtonUncheckedIcon />}
												checkedIcon={<RadioButtonCheckedIcon />}
												checked={option.isCheck}
											/>
										</Box>
									</Box>
								);
							})}
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							padding: '0 5px',
						}}
					>
						<Box>
							<Button
								variant="contained"
								sx={{
									width: '50px',
								}}
								onClick={handleBackStep}
							>
								Back
							</Button>
						</Box>
						<Box>
							{currentStep === question.length - 1 ? (
								<Button
									variant="contained"
									sx={{
										width: 'fit-content',
										padding:'6 10px'
									}}
									onClick={handleNextStep}
								>
									Submit
								</Button>
							) : (
								<Button
									variant="contained"
									sx={{
										width: '50px',
									}}
									onClick={handleNextStep}
								>
									Next
								</Button>
							)}

						</Box>
					</Box>
				</Box>
			</CustomModalMotion>
		</>
	);
}

export default DetailChecking;
