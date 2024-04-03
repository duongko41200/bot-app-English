import React, { useEffect } from 'react';
import Cards from './Cards/Cards';
import './MainDash.css';
import Bars from '../../components/Bar/Bar';
import RightSide from './RigtSide/RightSide'
import { useSelector } from 'react-redux';
const MainDash = () => {

	const auth = useSelector((state) => state.authStore.user)

	useEffect(() => {
		
		console.log("autfcdh:", auth)
		const user = localStorage.getItem('user');

		console.log('auth :',auth)

		if (user != null) {


			dispatch(SET_USER(user))
		}
	},[])
	return (
		<div className="MainDash">
			<div className="tilte-wellcome">
				<div className="tilte-wellcome__content">
					<div className="title-main--size">Hello, { auth.name}!</div>
					<div className="title-extra--size">pro vip ngon ngu</div>
				</div>
			</div>

			<div className="rounded-t-sm bg-white overview">
				
				<div className="sub-heading">
					<div className="sub-heading--size">Tổng quan</div>
				</div>
				<Cards />
				{/* <Table /> */}
				<Bars />
				<RightSide/>
			</div>
		</div>
	);
};

export default MainDash;
