import React from 'react'

function FormStep3() {
  return (
	<div className='w-ful flex justify-center'>
		  <div className='flex flex-col gap-10'>
			  <div className='text-center text-orange-400 font-medium'>
				Từ của bạn thuộc chủ để nào vậy nhỉ</div>
			  <div className='grid grid-cols-4  gap-3'>
				  <div className='px-2 pt-1 text-center pt-1 text-center border text-sm rounded shadow'>Khác</div>
				  <div className='px-2 pt-1 text-center border text-sm rounded shadow w-fit'>Đời sống </div>
				  <div className='px-2 pt-1 text-center border text-sm rounded shadow'>Khác</div>
				  <div className='px-2 pt-1 text-center border text-sm rounded shadow'>Đời sống</div>
				  <div className='px-2 pt-1 text-center border text-sm rounded shadow'>Khác</div>
				  <div className='px-2 pt-1 text-center border text-sm rounded shadow'>Đời sống</div>
			  </div>
		</div>
	</div>
  )
}

export default FormStep3