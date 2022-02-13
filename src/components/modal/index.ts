import loadable from '@loadable/component'

/**
 * @description
 * `modal` 모달 컴포넌트
 */

export const modals = {
	/** sample modal */
	Sample: loadable(() => import('@components/modal/Sample')),
}
