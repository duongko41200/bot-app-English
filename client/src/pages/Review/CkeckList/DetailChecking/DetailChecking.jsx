import React, { useEffect, useState } from 'react';
import CustomModalMotion from '../../../../components/ui/CustomFormModal/CustomModalMotion';
import { Box, Input } from '@mui/material';
import { GoogleGenerativeAI } from '@google/generative-ai'; // Ensure this import is correct
import SpinnerLoading from '../../../../components/ui/SpinnerLoading/SpinnerLoading';

function DetailChecking({ open, closeModalBottom }) {
	const [content, setContent] = useState('');
	const [prompts, setPrompts] = useState('');
	const [showSpiner, setShowSpiner] = useState(false);

	const handleSaveUpdate = async () => {
		setContent('');
		setShowSpiner(true);
		try {
			const genAI = new GoogleGenerativeAI(
				'AIzaSyAwEvAGplcQa0zvl_FWYA5yOlcBVJDb8nA'
			);
			const model = genAI.getGenerativeModel({
				model: 'gemini-1.5-flash',
			});
			const prompt = prompts;

			const result = await model.generateContent(prompt);
			const response = result.response;
			const text = response.text();
			setShowSpiner(false);
			setContent(text);
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
			>
				<Box sx={{}}>
					<Input
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
				</SpinnerLoading>
			</CustomModalMotion>
		</>
	);
}

export default DetailChecking;
