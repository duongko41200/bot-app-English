const ruleQues = (text) => {
	const rule = `question 1: What does ${text} mean? with 3 multiple choice answers (vietnamese)`;
	const rule2 = `question 2: Choose the correct description of the ${text}? with 3 multiple choice answers (English)`;
	const rule3 = `question3: In what situations should ${text}  be used? with 3 multiple choice answers (English)`;
	const rule4 = `All questions are in English`;

	const roleAll = `${rule4}. ${rule}. ${rule2}. ${rule3}`;

	return roleAll;
};

const promptExam = (level, text) => {
	switch (level) {
		case 1:
			return `you are a quiz master. generate 3 random questions about ${ruleQues(
				text
			)} with 3 multiple choice answers. Also provide the answer separately. The response should be in the following Format:{"question":[{"id":0,"questions":"", "options":[{"name": "option1","isCheck":false},...],"answer":""},...}]}. Note: Same output as Format, do not add any other characters and Set the isCheck property to false`;
		case 2:
			return;

		default:
			break;
	}
};

export { promptExam };
