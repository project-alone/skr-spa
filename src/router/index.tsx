import { componentRoutes } from '@router/routes/components'
import { exampleRoutes } from '@router/routes/example'
import { noneLayoutRoutes } from '@router/routes/noneLayout'
import { publishingRoutes } from '@router/routes/publishing'

// types
import type { RouteObject } from 'react-router-dom'

/**
 * @description
 * 만들어진 route객체를 추가
 */
const routes: RouteObject[] = [noneLayoutRoutes, exampleRoutes, componentRoutes, publishingRoutes]

export default routes
