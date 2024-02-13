import React from 'react';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	interaction: {
		mode: 'index',
		intersect: false,
	},
	stacked: false,
	plugins: {
		datalabels: { display: false },
		title: {
			display: false,
			text: 'Chart.js Line Chart - Multi Axis',
		},
	},
	scales: {
		y: {
			type: 'linear',
			display: true,
			position: 'left',
		},
		y1: {
			type: 'linear',
			display: true,
			position: 'right',
			grid: {
				drawOnChartArea: false,
			},
		},
	},
};

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'dfsfsd',
	'sdkfjk',
	'ksdjfk',
	'djsfk',
	'dsfdsf',
];

export const data = {
	labels,
	datasets: [
		{
			label: 'số câu',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 200 })
			), // thống kê theo tháng số câu đã học
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
			yAxisID: 'y',
		},
		{
			label: 'số từ',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 200 })
			),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
			yAxisID: 'y1',
		},
	],
};

const LineChart = () => {
	const args = {
		width: '100%',
		height: '60px',
	};
	return (
		<>
			<div className="wrapper-pie flex items-center justify-center w-full h-full">
				<div className=" h-full w-[100%] sm:w-[50%] flex justify-center">
					<Line {...args} data={data} options={options} />
				</div>
			</div>
		</>
	);
};

export default LineChart;
