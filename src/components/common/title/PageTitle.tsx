import React from 'react'
import { PageTitleWrap } from '@components/common/title/Title.styled'
import { Breadcrumbs } from '@components/common/breadcrumbs'

// types
import type { BreadcrumbsProps } from '@components/common/breadcrumbs'

type PageTitleProps = BreadcrumbsProps

export const PageTitle: React.FC<PageTitleProps> = ({ children, list }) => {
	return (
		<PageTitleWrap>
			<Breadcrumbs list={list} />
			{children}
		</PageTitleWrap>
	)
}
