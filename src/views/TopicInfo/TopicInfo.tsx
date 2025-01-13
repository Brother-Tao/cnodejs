import type { FC, ReactNode } from 'react'
import { TopicInfoStyled } from './styled'
import request from '@/server/request'
import ReactHtmlParser from 'react-html-parser'

interface Iprops {
  children?: ReactNode
}

const getTopicInfo = (id: string) => {
  return request.get(`/topic/${id} `)
}

interface ITopicInfo {
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
  // author: Author
  // replies: Reply[]
  is_collect: boolean
}

const TopicInfo: FC<Iprops> = () => {
  const { id } = useParams()
  const [topicInfo, setTopicInfo] = useState<ITopicInfo>()

  useEffect(() => {
    if (id) {
      getTopicInfo(id).then((res) => {
        console.log(res, 'res')
        setTopicInfo(res.data)
      })
    }
  }, [id])
  return (
    <TopicInfoStyled>
      {topicInfo && <div>{ReactHtmlParser(topicInfo.content)}</div>}
    </TopicInfoStyled>
  )
}

export default memo(TopicInfo)
