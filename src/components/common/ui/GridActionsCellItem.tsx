import React from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid-pro'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'

/**
 * @warn 이 컴포넌트는 type extends가 적용이 되지 않습니다. (보류)
 * @reason IconButtonProps를 merge하여 props를 사용하는 과정에서 IconButtonProps중 color 필드가 override되어있는데
 * mui 내에서 그 부분을 적용하는 수단을 재공되지 않고 있습니다.
 */

// types
import type { GridActionsCellItemProps } from '@mui/x-data-grid-pro'
import type { IconButtonProps } from '@mui/material'

// GridActionsCellItemProps
export const GridActionsCellItemForGrid: React.VFC<
	GridActionsCellItemProps & { color: IconButtonProps['color'] }
> = (props) => {
	// @ts-ignore
	return <GridActionsCellItem {...props} />
}
