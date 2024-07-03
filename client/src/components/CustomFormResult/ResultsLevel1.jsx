import {
	Typography,
	Button,
	Card,
	CardContent,
	Box,
} from '@mui/material';
import React, { useState } from 'react';
import './style.css';
import { reviewResult } from '../../Constant/DetailChecking';
import { useStyles } from '../../style/general';

function ResultsLevel1({ result, question, text, resGeminiResearch }) {
	const classes = useStyles();
	const [isShowCard, setIsShowCard] = useState(false);

	return (
		<>
			<div class="card">
				<div class={`card__inner ${isShowCard ? 'is-flipped' : ''}`}>
					{!isShowCard ? (
						<div
							class={`card__face card__face--front ${classes.container} `}
						>
							<Box>
								<Typography variant="h2" className={classes.title}>
									Chúc mừng!
								</Typography>
							</Box>
							<Box className={classes.center}>
								<Card className={classes.card}>
									<CardContent>
										<Typography
											variant="h5"
											className={classes.subtitle}
										>
											Score
										</Typography>
										<Typography variant="h5" className={classes.score}>
											Good
										</Typography>
										<Typography
											variant="h5"
											className={classes.subtitle}
										>
											{result}/{question?.length}
										</Typography>
									</CardContent>
								</Card>
							</Box>
							<Box className={classes.buttons}>
								<Button
									variant="contained"
									color="primary"
									className={classes.button}
									onClick={() => setIsShowCard(!isShowCard)}
								>
									Tìm hiểu chi tiết
								</Button>
								<Button
									variant="contained"
									color="secondary"
									className={classes.button}
								>
									Nâng cấp Level
								</Button>
							</Box>
						</div>
					) : (
						<div class="card__face card__face--back">
							<div class="card__content">
								<div class="card__header">
									<h3>Panda</h3>
									<h4>
										Đối với "<strong>{text}</strong>": Mình thấy{' '}
										{reviewResult(
											Math.round((result / question?.length) * 100)
										)}
									</h4>
									<Box className={classes.buttonsBox}>
										<Button
											variant="contained"
											color="primary"
											size="small"
											className={classes.buttonss}
											onClick={() => setIsShowCard(!isShowCard)}
										>
											Quay lại
										</Button>
										<Button
											variant="contained"
											color="secondary"
											size="small"
											className={classes.buttonss}
										>
											Nâng cấp Level
										</Button>
									</Box>
								</div>
								<div class="card__body">
									<h3>Tìm hiểu nâng cao:</h3>
									{resGeminiResearch &&
										resGeminiResearch?.map((value, idx) => {
											return (
												<Box key={idx}>
													<Box className={classes.subtitleScenarios}>
														{value.scenarios}
													</Box>
													<Box className={classes.contex}>
														{value.example}
													</Box>
												</Box>
											);
										})}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default ResultsLevel1;
