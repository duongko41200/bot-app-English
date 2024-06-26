import { useState, useEffect, useCallback } from 'react';
import { getGeminiAiResearch } from '../services/AI/Gemini';
export const useSubmitQuiz = (question) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [countScore, setCountScore] = useState(0);

    console.log("question",question)

    const handleSubmit = useCallback(async() => {
        const correctAnswersCount = question.reduce((count, q) => {
            const selectedOption = q.options.find((option) => option.isCheck);
            return selectedOption && selectedOption.name === q.answer ? count + 1 : count;
        }, 0);


        setCountScore(correctAnswersCount);
        setIsSubmit(true);
    }, [question]);

    return {
        isSubmit,
        countScore,
        handleSubmit,
        setIsSubmit
    };
};