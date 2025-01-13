export interface ITopNav {
  title: string
  id: number
  tab: string
}

export const topNavs: ITopNav[] = [
  {
    title: '全部',
    id: 1,
    tab: 'all'
  },
  {
    title: '精华',
    id: 2,
    tab: 'good'
  },
  {
    title: '分享',
    id: 3,
    tab: 'share'
  },
  {
    title: '问答',
    id: 4,
    tab: 'ask'
  },
  {
    title: '招聘',
    id: 5,
    tab: 'job'
  },
  {
    title: '客户端测试',
    id: 6,
    tab: 'dev'
  }
]

interface Author {
  loginname: string
  avatar_url: string
}

export interface ITopics {
  id: string
  author_id: string
  tab: string
  content: string
  title: string
  last_reply_at: string
  good: boolean
  top: boolean
  reply_count: number
  visit_count: number
  create_at: string
  author: Author
}

export interface ITopicRes {
  success: boolean
  data: ITopics[]
}
