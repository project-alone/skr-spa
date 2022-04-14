import loadable from '@loadable/component'

/**
 * @description
 * `modal` 모달 컴포넌트
 */

/** sample modal */
const modal = {
	Simple: loadable(() => import('@components/modal/SimpleModal')),
}

export default modal
