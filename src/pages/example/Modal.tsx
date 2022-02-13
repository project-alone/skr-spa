import React from 'react'
import { useModal } from '@lib/hooks'
import { modals } from '@components/modal'

const PortalPage: React.FC = () => {
	const { openModal } = useModal()

	const handleClick = () => {
		openModal(modals.Sample, {
			open: true,
			children: (
				<div>
					<h1>modal sample</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veritatis
						itaque assumenda quia enim, iste totam iure! Impedit exercitationem rerum
						repudiandae. Ex laboriosam incidunt assumenda ipsa, sunt provident possimus
						dolorem.
					</p>
				</div>
			),
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
