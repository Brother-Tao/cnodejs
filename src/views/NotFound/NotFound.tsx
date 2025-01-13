import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotFoundWrapper } from './styled'

const NotFound: FC = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <NotFoundWrapper>
      <h1 className="error-code">404</h1>
      <p className="error-text">抱歉，您访问的页面不存在</p>
      <p className="countdown">{countdown} 秒后自动返回首页</p>
      <button className="home-button" onClick={handleBackHome}>
        立即返回首页
      </button>
    </NotFoundWrapper>
  )
}

export default NotFound
