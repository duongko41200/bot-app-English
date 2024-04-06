import React from 'react';
import './SpinnerLoading.css';
function SpinnerLoading({ show, children }) {

	return (
		<>
			<div className="relative">
				{show === true && (
					<>
					
					<div className=" absolute w-full h-full flex justify-center bg-white opacity-30 items-center">
						
					</div>
					
					<div className=" absolute w-full h-full flex justify-center items-center">
						<div className="loader"> </div>
					</div>
					</>
					
		
				)}
				{children}
			</div>
		</>
	);
}

export default SpinnerLoading;
