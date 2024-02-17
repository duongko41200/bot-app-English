import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { UilSignalAlt3 } from '@iconscout/react-unicons'

const Navigation = () => {
	const Menus = [
		{ name: 'home', icon: 'home', dis: 'translate-x-0', link: '/' },
		{
			name: 'analysis',
			icon: 'bar-chart',
			dis: 'translate-x-16',
			link: '/analysis',
		},
		{
			name: 'review',
			icon: 'book',
			dis: 'translate-x-32',
			link: '/review',
		},

		{
			name: 'speaking',
			icon: 'chatbox-ellipses',
			dis: 'translate-x-48',
			link: '/speaking',
		},
		{
			name: 'settings',
			icon: 'settings',
			dis: 'translate-x-64',
			link: '/setting',
		},
	];
	const [active, setActive] = useState(0);
	return (
		<div className="absolute w-[100%] bottom-0 bg-color max-h-[100px] min-h-[70px] px-1 items-center flex rounded-t-xl">
			<div className="flex relative w-screen justify-between">
				{Menus.map((menu, i) => (
					<div key={i} className="w-16">
						<Link
							to={`${menu.link}`}
							className={`flex flex-col p-2 text-center gap-1 rounded-lg ${
								i === active && 'bg-white'
							} `}
							onClick={() => setActive(i)}
						>
							<div
								className={`text-sm  flex flex-col justify-center items-center h-[35px] rounded-lg cursor-pointer duration-500`}
							>
								<div>
									<ion-icon name={menu.icon}></ion-icon>
								</div>

								<div>{menu.name}</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Navigation;
