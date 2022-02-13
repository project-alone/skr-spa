import Helmet from 'react-helmet'
import type { PageProps } from '@router/routes'

const NotFoundPage: React.FC<PageProps> = ({ title }) => {
	return (
		<>
			<Helmet>{title && <title>{title}</title>}</Helmet>
			<h1>404: 존재하지 않는 페이지입니다!</h1>
		</>
	)
}

export default NotFoundPage
