import FormExam1 from '../../components/CustomFormExam/FormExam1';

export const FORM_COMPONENTS = {
	1: FormExam1,
	// 2: FormExam2,
	// 3: FormExam3,
};

const getProps = (level, props) => {
	switch (level) {
		case 1:
			return {
				question: props.question,
				currentStep: props.currentStep,
				handleSubmit: props.handleSubmit,
				handleNextStep: props.handleNextStep,
				handleSelected: props.handleSelected,
				handleBackStep: props.handleBackStep,
			};

		default:
			return null;
	}
};

const reviewResult = (score) => {

	if (score == 100) {
		return "Bạn đã hoàn thành tốt level 1. Hãy giữ vũng phong độ nhé:))"
	}
	

	if (score >= 80) {
		return "Kết quả bạn khá tốt. Hãy tiếp tục ôn tập"
	}
	if (score >= 60) {
		return "Kết quả bạn tạm được. Mình tin lần sau bạn sẽ tốt hơn:))"
	}
	if (score >= 40) {
		return "Bạn Chưa thật sự là học tập. Bạn cần học lại"
	} else {
		return "Bạn cần học lại từ này thật kỹ"
	}
}

export { getProps,reviewResult };
