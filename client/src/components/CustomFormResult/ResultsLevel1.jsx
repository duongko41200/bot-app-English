import {
	Typography,
	Button,
	Card,
	CardContent,
	Box,
} from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import './style.css';
import { reviewResult } from '../../Constant/DetailChecking';

const useStyles = makeStyles({
	container: {
		// margin: '50px auto',
		// #ffce0087, #fec948b0
		padding: 20,
		background:
			'linear-gradient(to bottom right, #ffbb00, #fec948b0)',

		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		height: `calc(100vh - 170px)`,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: '100%', // Khung tròn
		boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
		padding: 10,
		textAlign: 'center',
		width: 'fit-content',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		textAlign: 'center',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 17,
		fontWeight: '600',
		color: 'GrayText',
	},
	score: {
		fontSize: 30,
		fontWeight: 700,
		color: 'forestgreen',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: 10,
		width:"100%"
	},
	buttonss: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: 10,
	},
	buttonsBox: {
		display: 'flex',
		justifyContent: 'start',
		fontSize: "16px",
		marginTop: 10,
		gap: 3
	},
	button: {
		margin: 2,
		width: '100%',
		padding:"10px 0"
	},

	account: {
		marginTop: 20,
		fontSize: 12,
		color: '#999',
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

function ResultsLevel1({ result, question ,text}) {
	const classes = useStyles();
	const [isShowCard, setIsShowCard] = useState(false);

	return (
		<>
			<div class="card" onClick={() => setIsShowCard(!isShowCard)}>
				<div class={`card__inner ${isShowCard ? 'is-flipped' : ''}`}>
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
									<Typography variant="h5" className={classes.subtitle}>
										Score
									</Typography>
									<Typography variant="h5" className={classes.score}>
										Good
									</Typography>
									<Typography variant="h5" className={classes.subtitle}>
										{result}/3
									</Typography>
								</CardContent>
							</Card>
						</Box>
						<Box className={classes.buttons}>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
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
					<div class="card__face card__face--back">
						<div class="card__content">
							<div class="card__header">
								{/* <div class="pp"></div> */}
								<h3>Panda</h3>
								<h4>Đối với "<strong>{text}</strong>": Mình thấy {reviewResult(Math.round((result / 3) * 100))}</h4>
								<Box className={classes.buttonsBox}>
							<Button
								variant="contained"
								color="primary"
								size='small'
								className={classes.buttonss}
							>
								Quay lại
							</Button>
							<Button
								variant="contained"
										color="secondary"
										size='small'
								className={classes.buttonss}
							>
								Nâng cấp Level
							</Button>
						</Box>
							</div>
							<div class="card__body">
								<h3>JavaScript Wizard</h3>
								<p>
									Lorem ipsum <strong>dolor</strong> sit amet,
									consectetur <strong>adipiscing</strong> elit. Sed id
									erat a magna lobortis dictum. Nunc est arcu,{' '}
									<strong>lacinia</strong> quis sapien placerat,{' '}
									<strong>laoreet</strong> tincidunt nulla.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ResultsLevel1;
