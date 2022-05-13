import { Mdi } from '@components/common'
import { LayoutStyled } from '@styles/common'

const tabData = [
	{ type: 'home', label: 'Home', active: false },
	{ label: '정보조회', active: true },
	{ label: '변경이력조회', active: false },
]
const UserManage: React.FC = () => {
	return (
		<>
			<Mdi tabData={tabData} />
			<LayoutStyled.Page>//contents</LayoutStyled.Page>
		</>
	)
}

export default UserManage
