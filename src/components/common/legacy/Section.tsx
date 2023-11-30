import { IconButton, Stack } from '@components/common/ui'
import { SubTitle } from '@components/common/title/SubTitle'
import { ReactComponent as IconSearch } from '../assets/images/icons/search.svg'
import { SectionStyle } from '@components/common/legacy/Section.styled'

// types
import type { PaperProps } from '@mui/material'
import type { SubTitleProps } from '@components/common/title/SubTitle'

interface SectionProps extends Omit<PaperProps, 'variant'> {
	variant: 'default' | 'search' | 'data' | 'toggle'
	titleToggle: SubTitleProps['titleData']
}

export const Section: React.FC<SectionProps> = ({ variant, titleToggle, children, ...rest }) => {
	return (
		<SectionStyle className={`section-${variant}`} {...rest}>
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
