import { IconButton, Stack } from '@components/common/ui'
import { SubTitle } from './Title'
import { ReactComponent as IconSearch } from '../assets/images/icons/search.svg'
import { SectionStyle } from '@components/common/Section.styled'

export const Section = ({ className = '', variant, titleToggle, children, ...rest }) => {
	return (
		<SectionStyle className={'section-' + variant} {...rest}>
			{variant === 'toggle' && <SubTitle titleData={titleToggle} />}
			{children}
			{variant === 'search' && (
				<Stack direction="row" justifyContent="flex-end" pt={18}>
					<IconButton color="primary">
						<IconSearch />
					</IconButton>
				</Stack>
			)}
		</SectionStyle>
	)
}

Section.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'search', 'data', 'toggle']),
}
