import { Helmet } from 'react-helmet-async'
import type { PageProps } from '@router/pages'

const NotFoundPage: React.FC<PageProps> = ({ title }) => {
	return (
		<>
			<Helmet>{title && <title>{title}</title>}</Helmet>
			<h1>404: 존재하지 않는 페이지입니다!</h1>
		</>
	)
}

export default NotFoundPage
