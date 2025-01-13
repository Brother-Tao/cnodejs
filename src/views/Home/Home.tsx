import { memo } from 'react'
import { HomeStyled } from './styled'
import { topNavs } from './config'
import type { ITopNav, ITopics } from './config'
import request from '@/server/request'
import Tiopics from '@/components/Tiopics/Tiopics'

const getTopics = async (tab: string = '', page: number = 1) => {
  return request.get('/topics', { params: { page: page, tab, limit: 50 } })
}

function Home() {
  const [activeNav, setActiveNav] = useState(topNavs[0].tab)
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    getTopics(activeNav, page).then((res) => {
      setTopics(res.data)
      setLoading(false)
    })
  }, [activeNav, page])

  return (
    <HomeStyled>
      <div className="main">
        <div className="content">
          <div className="topNav">
            {topNavs.map((item: ITopNav) => (
              <span
                key={item.id}
                className={` topNavItem ${activeNav === item.tab ? 'active' : ''}`}
                onClick={() => setActiveNav(item.tab)}
              >
                {item.title}
              </span>
            ))}
          </div>
          <div className="topics">
            {loading ? (
              <Spin spinning={loading} size="large" />
            ) : (
              topics.map((item: ITopics) => (
                <Tiopics
                  key={item.id}
                  id={item.id}
                  imgSrc={item.author.avatar_url}
                  replyCount={item.reply_count}
                  visitCount={item.visit_count}
                  title={item.title}
                  lastReplyAt={item.last_reply_at}
                  loginname={item.author.loginname}
                />
              ))
            )}
          </div>
          <div className="pagination">
            {loading ? (
              ''
            ) : (
              <Pagination
                showSizeChanger={false}
                current={page}
                total={500}
                pageSize={50}
                onChange={(page) => setPage(page)}
              />
            )}
          </div>
        </div>
        <div className="sidebar">sidebar</div>
      </div>
    </HomeStyled>
  )
}

export default memo(Home)
