import React from 'react'
import { SegmentStyle } from '@components/common/legacy/Segment.styled'

interface SegmentProps {
	disabled: boolean
	group: {
		name: string
		checked: boolean
		label: string
	}[]
}

const Segment: React.VFC<SegmentProps> = ({ disabled, group }) => {
	return (
		<SegmentStyle className={disabled ? 'disabled' : ''}>
			{group.map((item, idx) => {
				return (
					<React.Fragment key={idx}>
						<input
							type="radio"
							name={item.name}
							value={idx}
							id={item.name + idx}
							defaultChecked={item.checked}
							disabled={disabled}
						/>
						<label htmlFor={`${item.name}${idx}`}>
							<span>{item.label}</span>
						</label>
					</React.Fragment>
				)
			})}
		</SegmentStyle>
	)
}

export default Segment
