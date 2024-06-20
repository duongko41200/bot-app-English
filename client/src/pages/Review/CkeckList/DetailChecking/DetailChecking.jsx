import React, { useEffect, useState } from 'react';
import CustomModalMotion from '../../../../components/ui/CustomFormModal/CustomModalMotion';
import { Box, Checkbox, Input, Radio } from '@mui/material';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Ensure this import is correct
import SpinnerLoading from '../../../../components/ui/SpinnerLoading/SpinnerLoading';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, {
	linearProgressClasses,
} from '@mui/material/LinearProgress';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor:
			theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
	},
}));

function DetailChecking({ open, closeModalBottom }) {
	const [content, setContent] = useState('');
	const [prompts, setPrompts] = useState('');
	const [showSpiner, setShowSpiner] = useState(false);

	// api coze pat_HaMwxs5mbWCvDHGAPfti7r39DS0QopFnroedGuRL7CL8fan4TcJ8QseITfiTM3rv

	const handleSaveUpdate = async () => {
		setContent('');
		setShowSpiner(true);
		try {
			// const genAI = new GoogleGenerativeAI(
			// 	'AIzaSyAwEvAGplcQa0zvl_FWYA5yOlcBVJDb8nA'
			// );
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
						color: 'hsl(215, 15%, 12%)',
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<Box
						sx={{
							width: '100%',
							padding: '10px 20px',
							minHeight: '200px',
							background: '#397ded38',
							border: '1px solid hsl(215, 15%, 89%)',
							borderRadius: '30px',
							boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
						}}
					>
						Caau nayf co I am student so I must go to school in the
						tomorrow area.Caau nay co ys nghia nhu nao
					</Box>
				</Box>
				{/* <Stack spacing={2} sx={{ flexGrow: 1 }}>
					<br />
					<BorderLinearProgress variant="determinate" value={50} />
				</Stack> */}

				<Box>
					<Box
						sx={{
							width: '100%',
							minHeight: '50px',
							
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '5px',
							boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
							border: '1px solid hsl(215, 15%, 89%)',
							borderRadius: '10px',
							marginTop:'8px'
						}}
					>
						<Box>dap an 1</Box>
						<Box>
							<Checkbox
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<RadioButtonCheckedIcon />}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							width: '100%',
							minHeight: '50px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '5px',
							boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
							border: '1px solid hsl(215, 15%, 89%)',
							borderRadius: '10px',
							marginTop:'8px'
						}}
					>
						<Box>dap an 1</Box>
						<Box>
							<Checkbox
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<RadioButtonCheckedIcon />}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							width: '100%',
							minHeight: '50px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '5px',
							boxShadow: 'rgba(223, 226, 231, 0.6) 0px 4px 8px',
							border: '1px solid hsl(215, 15%, 89%)',
							borderRadius: '10px',
							marginTop:'8px'
						}}
					>
						<Box>dap an 1</Box>
						<Box>
							<Checkbox
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<RadioButtonCheckedIcon />}
							/>
						</Box>
					</Box>
				</Box>
			</CustomModalMotion>
		</>
	);
}

export default DetailChecking;
