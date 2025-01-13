import type { FC, ReactNode } from 'react'
import { TiopicsStyled } from './styled'
import { formatTimer } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  imgSrc: string
  replyCount: number
  visitCount: number
  title: string
  lastReplyAt: string
  loginname: string
  id: string
}

const Tiopics: FC<Iprops> = ({
  id,
  imgSrc,
  replyCount,
  visitCount,
  title,
  lastReplyAt,
  loginname
}) => {
  const navigate = useNavigate()
  console.log(id, 'id')

  return (
    <TiopicsStyled onClick={() => navigate(`/topic/${id}`)}>
      <img src={imgSrc} className="avatar" loading="lazy" alt={loginname} />
      <div className="reply_count">
        <span title="回复数" className="reply">
          {replyCount}
        </span>
        <span>/</span>
        <span title="点击数">{visitCount}</span>
      </div>
      <span>{title}</span>
      <span className="time">{formatTimer(lastReplyAt)}</span>
    </TiopicsStyled>
  )
}

export default memo(Tiopics)
