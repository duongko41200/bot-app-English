import React from 'react'

function FormStep2() {
  return (
	<div className='w-ful flex justify-center'>
		  <div className='flex flex-col gap-10'>
			  <div className='text-center text-orange-400 font-medium'>
				  Nghĩa của từ vừa bạn nhập là gì vậy😽</div>
			  <div>
				  <input type="text" className='border p-2 w-full' placeholder='Nhập nghĩa từ...' />
			  </div>
		</div>
	</div>
  )
}

export default FormStep2