import { useState, useEffect, useCallback } from 'react';
export const useSubmitQuiz = (question) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [countScore, setCountScore] = useState(0);

    const handleSubmit = useCallback(() => {
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