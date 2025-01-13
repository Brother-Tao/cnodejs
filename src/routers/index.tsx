import { RouteObject } from 'react-router-dom'
import LayOut from '@/layout/LayOut.tsx'
import { Home, Guide, About, NotFound, Api, Register, TopicInfo } from './element.ts'
import { Suspense } from 'react'

const lazyLoad = (children: React.ReactNode): React.ReactNode => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

/**
 * 公共路由
 */
export const routers: RouteObject[] = [
  {
    path: '/',
    id: 'LayOut',
    element: <LayOut />,
    children: [
      {
        path: '/',
        id: 'Home',
        element: lazyLoad(<Home />)
      },
      {
        path: '/guide',
        id: 'Guide',
        element: lazyLoad(<Guide />)
      },
      {
        path: '/about',
        id: 'About',
        element: lazyLoad(<About />)
      },
      {
        path: '/api',
        id: 'Api',
        element: lazyLoad(<Api />)
      },
      {
        path: '/register',
        id: 'Register',
        element: lazyLoad(<Register />)
      },
      {
        path: '/topic/:id',
        id: 'TopicInfo',
        element: lazyLoad(<TopicInfo />)
      }
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

export default routers
