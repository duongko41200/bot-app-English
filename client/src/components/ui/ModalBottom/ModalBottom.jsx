import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { SET_OPEN_MODAL_BOTTOM } from '../../../store/general';

function ModalBottom({ open,closeModalBottom }) {
	const dispatch = useDispatch
	
	// const closeModalBottom = () => {
	// 	dispatch(
	// 		SET_OPEN_MODAL_BOTTOM(false)
	// 	);
	// }
	return (
		<>
			<motion.div
				animate={
					open
						? { opacity: 0.2, zIndex: 1 }
						: { opacity: 0, display: 'none' }
				}
				initial={{ opacity: 0 }}
				className="fixed top-0 bottom-0 left-0 h-screen w-screen bg-black"
				onClick={closeModalBottom}
			/>
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { y: 0, height: 'auto' },
							collapsed: { y: '100%', height: 0 },
						}}
						transition={{
							duration: 0.3,
							ease: [0.04, 0.62, 0.23, 0.98],
						}}
						className="border-gray-50 fixed bottom-0 right-0 left-0 x-10 w-full rounded-t-3xl border-3 z-10 border-b-0 bg-white shadow-[0px_-8px_20px_-6px_rgba(0,0,0,0.3)]"
					>
						<div className="h-[80%] p-4">
							<div
								className="mb-2 flex justify-end"
								onClick={closeModalBottom}
							>
								X
							</div>
							<div className="h-[500px]">fgd</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default ModalBottom;
