import { DataGridPro as MuiDataGridPro } from '@mui/x-data-grid-pro'

// types
import type { DataGridProProps } from '@mui/x-data-grid-pro'

const DataGrid: React.VFC<DataGridProProps> = ({ ...rest }) => {
	return <MuiDataGridPro {...rest} />
}
