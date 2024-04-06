import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import AccessService from '../../services/API/access.service';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';
import {
	useNavigation,
	useNavigate,
	NavLink,
	Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../store/feature/auth';
import SpinnerLoading from '../../components/ui/SpinnerLoading/SpinnerLoading';

function SignIn() {
	const [isShow, setIsShow] = useState(false);
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const onLogin = async () => {
		try {
			setIsShow(true);
			const [res, err] = await AccessService.login({
				email: formValues.email,
				password: formValues.password,
			});
			console.log('createUser:', res);

			if (err && err.message.includes('not registered')) {
				toast.error(`Tài khoản không tồn tại`, {
					duration: 4000,
					position: 'top-right',

					// Styling
					style: {},
					className: '',

					// Aria
					ariaProps: {
						role: 'status',
						'aria-live': 'polite',
					},
				});
				setIsShow(false);
				return;
			}

			if (err && err.message.includes('Authentication failed')) {
				toast.error(`Mật khẩu không chính xác `, {
					duration: 4000,
					position: 'top-right',

					// Styling
					style: {},
					className: '',

					// Aria
					ariaProps: {
						role: 'status',
						'aria-live': 'polite',
					},
				});
				setIsShow(false);
				return;
			}

			if (err) {
				toast.error(`Hãy thử đăng nhập lại xem `, {
					duration: 4000,
					position: 'top-right',

					// Styling
					style: {},
					className: '',

					// Aria
					ariaProps: {
						role: 'status',
						'aria-live': 'polite',
					},
				});
				setIsShow(false);
				return;
			}
			toast.success('chào mừng bạn đến với pikachu', {
				duration: 4000,
				position: 'top-right',

				// Styling
				style: {},
				className: '',

				// Aria
				ariaProps: {
					role: 'status',
					'aria-live': 'polite',
				},
			});

			localStorage.setItem('userId', res.metadata?.user?._id);
			localStorage.setItem(
				'accessToken',
				res.metadata?.tokens?.accessToken
			);
			localStorage.setItem(
				'refreshToken',
				res.metadata?.tokens?.refreshToken
			);
			localStorage.setItem('user', JSON.stringify(res.metadata?.user));
			dispatch(SET_USER(res.metadata?.user));
			localStorage.removeItem('listText');
			localStorage.removeItem('totalPages');
			setIsShow(false);

			navigate('/');
		} catch (error) {
			toast.error(`${error}`, {
				duration: 4000,
				position: 'top-right',

				// Styling
				style: {},
				className: '',

				// Aria
				ariaProps: {
					role: 'status',
					'aria-live': 'polite',
				},
			});
			console.log({ error });
			setIsShow(false);
		}
	};
	return (
		<>
			<SpinnerLoading show={isShow}>
				<div className="container sign-up-mode">
					<div className="forms-container">
						<div className="signin-signup">
							<div className=" form sign-up-form">
								<h2 className="title">Sign In</h2>

								<div className="input-field">
									<i className="fas fa-envelope"></i>
									<input
										type="email"
										name="email"
										value={formValues.email}
										onChange={handleInputChange}
										placeholder="Email"
									/>
								</div>
								<div className="input-field">
									<i className="fas fa-lock"></i>
									<input
										type="password"
										name="password"
										value={formValues.password}
										onChange={handleInputChange}
										placeholder="Password"
									/>
								</div>
								<div
									className="btn flex justify-center items-center"
									style={{ pointerEvents: 'auto' }}
									onClick={onLogin}
								>
									<div>Submit</div>
								</div>
							</div>
						</div>
					</div>

					<div className="panels-container">
						<div className="panel right-panel">
							<div className="content ">
								<h3>One of us ?</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Nostrum laboriosam ad deleniti.
								</p>
								<div className="flex justify-center">
									<NavLink
										to="/signup"
										className="btn w-fit h-fit  form form-padding transparent"
										id="sign-in-btn"
									>
										<div className="w-fit">Sign Up</div>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
					<Toaster />
				</div>
			</SpinnerLoading>
		</>
	);
}

export default SignIn;
