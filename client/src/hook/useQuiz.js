import { useState, useEffect, useCallback } from 'react';

const initialQuestions = [
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
		answer: 'Sydney',
	},
];

export const useQuiz = () => {
	const [question, setQuestion] = useState(initialQuestions);
	const [currentStep, setCurrentStep] = useState(0);

	const handleStepChange = useCallback(
		(stepChange) => {
			setCurrentStep((prevStep) => {
				const newStep = prevStep + stepChange;
				return newStep >= 0 && newStep < question.length
					? newStep
					: prevStep;
			});
		},
		[question.length]
	);

	const handleSelected = useCallback(
		(id) => {
			setQuestion((prevQuestions) => {
				const updatedQuestions = [...prevQuestions];
				updatedQuestions[currentStep].options = updatedQuestions[
					currentStep
				].options.map((option, idx) => ({
					...option,
					isCheck: idx === id,
				}));
				return updatedQuestions;
			});
		},
		[currentStep]
	);

	return {
		question,
		currentStep,
		handleStepChange,
		handleSelected,
		setQuestion,
	};
};
