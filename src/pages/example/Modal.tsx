import React from 'react'
import { useModal } from '@hooks/index'
import modal from '@components/modal'

const PortalPage: React.FC = () => {
	const { openModal } = useModal()

	const handleClick = () => {
		openModal(modal.Simple, {
			open: true,
		})
	}

	return (
		<div>
			<h1>createPortal 사용</h1>
			<button type="button" onClick={handleClick}>
				open modal
			</button>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, pariatur!</p>
		</div>
	)
}

export default PortalPage
