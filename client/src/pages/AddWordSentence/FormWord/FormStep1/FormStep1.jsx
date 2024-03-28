import React from 'react'

function FormStep1() {
  return (
	<div className='w-ful flex justify-center'>
		  <div className='flex flex-col gap-10'>
			  <div className='text-center text-orange-400 font-medium'>
				  Nhập từ mà bạn muốn ghi nhớ 😽</div>
			  <div>
				  <input type="text" className='border p-2 w-full' placeholder='Nhập từ...' />
			  </div>
		</div>
	</div>
  )
}

export default FormStep1