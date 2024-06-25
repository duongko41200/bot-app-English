export const styles = {
	container: {
		width: '100%',
		height: '500px',
		background: 'linear-gradient(to bottom right, rgb(254, 254, 139), #fec948b0)',
		border: '1px solid hsl(215, 15%, 89%)',
		borderRadius: '30px',
		boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
		display: 'flex',
		flexDirection: 'column',
		gap: 1,
	},
	questionBox: {
		color: 'hsl(215, 15%, 12%)',
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	innerQuestionBox: {
		width: '100%',
		padding: '10px 8px',
		minHeight: '200px',
		background:
			'linear-gradient(to bottom right, rgb(254, 254, 139), #fec948b0)',
		border: '1px solid hsl(215, 15%, 89%)',
		borderRadius: '15px',
		boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
		display: 'flex',
		gap: '6px',
	},

	questionTextBox: {
		width: '100%',
		padding: '10px 20px',
		minHeight: '100px',
		background: 'linear-gradient(to top, #fff, #fff)',
		border: '1px solid hsl(215, 15%, 89%)',
		borderRadius: '20px',
		boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
	},
	questionHeader: {
		fontSize: '25px',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	questionText: {
		fontSize: '16px',
	},
	optionsContainer: {
		padding: '0 5px',
		maxHeight: "250px",
		overflow: "auto"
	},
	optionBox: (isChecked) => ({
		width: '100%',
		minHeight: '50px',
		background: isChecked ? '#1976d291' : '#fff',
		color: isChecked ? '#fff' : 'black',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '5px',
		boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
		border: `solid ${isChecked ? '1px #1976d291' : '1px #00000042'}`,
		borderRadius: '10px',
		marginTop: '8px',
		fontWeight: '700',
		cursor: 'pointer',
	}),
	buttonContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '0 5px',
	},
	backButton: {
		width: '50px',
	},
	submitButton: {
		width: 'fit-content',
		padding: '6px 10px',
	},
	nextButton: {
		width: '50px',
	},
};