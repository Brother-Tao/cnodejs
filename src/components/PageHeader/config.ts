export interface INav {
  name: string
  path: string
}

export const navs: INav[] = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '新手入门',
    path: '/guide'
  },
  {
    name: 'API',
    path: '/api'
  },
  {
    name: '关于',
    path: '/about'
  },
  {
    name: '注册',
    path: '/register'
  },
  {
    name: '登录',
    path: '/login'
  }
]
