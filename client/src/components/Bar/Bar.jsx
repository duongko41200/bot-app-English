import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import './Bar.css';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		datalabels:{display:false},
		legend: {
			position: 'left',
		},
		title: {
			display: true,
			text: '',
			position: 'top',
		},
	},
};

const labels = ['số từ/câu theo từng cấp độ trong tháng 11'];

const data = {
	labels,
	datasets: [
		{
			label: 'cấp1',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 2000 })
			),
			backgroundColor: '#EDC349',
		},
		{
			label: 'cấp 2',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 2000 })
			),
			backgroundColor: '#FFA01B',
		},
		{
			label: 'cấp 3',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 2000 })
			),
			backgroundColor: '#C61F2B',
		},
		{
			label: 'cấp 4',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 2000 })
			),
			backgroundColor: '#6E314F',
		},
		{
			label: 'cấp 5',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 2000 })
			),
			backgroundColor: '#502380',
		},
		{
			label: 'cấp 6',
			data: labels.map(() =>
				faker.datatype.number({ min: 0, max: 2000 })
			),
			backgroundColor: '#0A3161',
		},
		{
			label: 'cấp 7',
			data: [1000],
			backgroundColor: '#3E8F78',
		},
	],
};

const Bars = () => {
	
	return (
		<>
			<div className="wrapper-title">
				<div className="title-bar">Phân tích dữ liệu</div>
				<div className="title-detail">xem chi tiết</div>
			</div>

			<Bar options={options} data={data} />
		</>
	);
};

export default Bars;
