const ruleQues = (text) => {
	const rule = `question 1: What does ${text} mean? with 3 multiple choice answers (vietnamese)`;
	const rule2 = `question 2: Choose the correct description of the ${text}? with 3 multiple choice answers (English)`;
	const rule3 = `question3: In what situations should ${text}  be used? with 3 multiple choice answers (English)`;
	const rule4 = `All questions are in English`;

	const rule5 = `you are a quiz master. generate 3 random questions about`;

	const roleAll = `${rule5} ${rule4}. ${rule}. ${rule2}. ${rule3}`;

	return roleAll;
};

const ruleQues2 = (text) => {
	const rule1 = `question 1: What does ${text} mean? with 3 multiple choice answers (vietnamese)`;
	const rule2 = `question 2: Choose the correct description of the ${text}? with 3 multiple choice answers (English)`;
	const rule3 = `question3: In what situations should ${text}  be used? with 3 multiple choice answers (English)`;
	const rule4 = `All questions are in English`;
	const rule5 = `Questions number 4 and 5 will be two random questions relevant to ${text}, but they should not be similar to the ideas of the first 3 questions`;

	const rule = `you are a quiz master. generate 3 random questions about`;

	const roleAll = `${rule} ${rule4}. ${rule1}. ${rule2}. ${rule3}. ${rule5}`;

	return roleAll;
};

const getRule = (level, text) => {
	switch (level) {
		case 1:
			return ruleQues(text);
		case 2:
			return ruleQues2(text);

		default:
			break;
	}
};

const ruleResult1 = () => {
	const rule = `value of scenarios by VietNamese , value of example by English`;

	return rule;
};

const promptExam = (level, text) => {
	switch (level) {
		case 1:
		case 2:
			return `you are a quiz master. generate 3 random questions about ${getRule(
				level,
				text
			)} with 3 multiple choice answers. Also provide the answer separately. The response should be in the following FORMAT:{"question":[{"id":0,"questions":"", "options":[{"name": "option1","isCheck":false},...],"answer":""},...}]}. Note: Same output as FORMAT, do not add any other characters and Set the isCheck property to false`;
		case 3:
			return;

		default:
			break;
	}
};

const promptResearch = (level, text) => {
	switch (level) {
		case 1:
		case 2:
			return `I want 3-5 scenarios for using the phrase '${text}'. The response should be in the following FORMAT:{"data":[{"id":0,"scenarios":"", "example":""]}. Note: Same output as FORMAT and do Not add any other characters and ${ruleResult1()}`;
		// case 2:
		// 	return;

		default:
			break;
	}
};

export { promptExam, promptResearch };
