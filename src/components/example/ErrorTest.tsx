import type { FallbackProps } from 'react-error-boundary'

export const ErrorTest: React.FC = () => {
	throw new Error('에러 발생!!!!')
	return null
}

export const ErrorFallbackComponent: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	console.log(error)
	return (
		<div>
			에러가 발생했습니다.
			<br />
			<p></p>
			<button
				type="button"
				onClick={() => {
					resetErrorBoundary()
				}}>
				refresh
			</button>
		</div>
	)
}
