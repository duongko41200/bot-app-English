import React, { useEffect, useState } from 'react';
import './SignUp.css';
import AccessService from "../../services/API/access.service"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {

	const [data,setData]=useState('')
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
	const onSignUp = async () => {

		try {
					
		const createUser = await AccessService.signUp({
			name: formValues.name,
			email: formValues.email,
			password: formValues.password
		})

		

		console.log("new user:",createUser)

		
			
		} catch (error) { 

			console.log({error})
		
		}

	}

	useEffect(() => {
		console.log(import.meta.env)
	}, []);
	return (
		<>
			<div className="container sign-up-mode">
				<div className="forms-container">
					<div className="signin-signup">
						<form action="#" className="sign-up-form">
							<h2 className="title">Sign up {data}</h2>
							<div className="input-field">
								<i className="fas fa-user"></i>
								<input
									type="text"
									name="name"
									value={formValues.name}
									onChange={handleInputChange}
									placeholder="Username"
								/>
							</div>
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
							<div className="input-field">
								<i className="fas fa-lock"></i>
								<input type="password" placeholder="Comfirm Password" />
							</div>
							<div className="btn" style={{ pointerEvents: 'auto' }} onClick={onSignUp}>
								Submit
							</div>
						</form>
					</div>
				</div>

				<div className="panels-container">
					<div className="panel right-panel">
						<div className="content">
							<h3>One of us ?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nostrum laboriosam ad deleniti.
							</p>
							<button className="btn transparent" id="sign-in-btn">
								Sign in
							</button>
						</div>
						<img src="img/register.svg" className="image" alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default SignUp;
