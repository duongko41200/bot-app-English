import React, { useState } from 'react';
import "./SignIn.css";
import {
	useNavigation,
	useNavigate,
	NavLink,
	Navigate,
} from 'react-router-dom';

function SignIn() {
  const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
	// const onSignUp = async () => {
	// 	try {
	// 		const createUser = await AccessService.signUp({
	// 			name: formValues.name,
	// 			email: formValues.email,
	// 			password: formValues.password,
	// 		});

	// 		console.log('new user:', createUser);
	// 	} catch (error) {
	// 		console.log({ error });
	// 	}
	// };
	return (
		<>
			<div className="container sign-up-mode">
				<div className="forms-container">
					<div className="signin-signup">
						<div  className=" form sign-up-form">
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nostrum laboriosam ad deleniti.
							</p>
							<div className="flex justify-center">
								<NavLink
									to="/signup"
									className="btn w-fit h-fit  form form-padding transparent"
									id="sign-in-btn"
								>
									<div className='w-fit'>Sign Up</div>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
