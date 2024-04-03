import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate, Link, useNavigate } from 'react-router-dom'
import { SET_USER } from '../store/feature/auth';

const PrivateRoutes = () => {
  


	const auth = useSelector((state) => state.authStore.user);
	const dispatch = useDispatch()
	const navigation = useNavigate()

	useEffect(() => {
		const user = localStorage.getItem('user');

		console.log('auth :',auth)

		if (user != null) {


			dispatch(SET_USER(user))
		}

	},[])
    return(
        auth != {} ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes