import loadable from '@loadable/component'

/**
 * @description
 * `modal` 모달 컴포넌트
 */

const modal = {
	/** sample modal - 추후 삭제 요망 */
	Simple: loadable(() => import('@components/modal/SimpleModal')),

	/** CRUD Test 사용자 추가하기 modal */
	AddUser: loadable(() => import('@components/modal/AddUserModal')),

	/** useAlert - 삭제 불가 */
	AlertModal: loadable(() => import('@components/modal/AlertModal')),
}

export default modal
