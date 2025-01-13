import type { FC, ReactNode } from 'react'
import { SidebarStyled } from './styled'
interface Iprops {
  children?: ReactNode
}

const Sidebar: FC<Iprops> = () => {
  return (
    <SidebarStyled>
      <div className="login">
        <p>CNode：Node.js专业中文社区</p>
        <p>
          您可以<span>登录</span>或<span>注册</span>，也可以
        </p>
        <Button>通过GitHub登录</Button>
      </div>
      <div className="panle">
        <div className="title">客户端二维码</div>
        <div className="inner">
          <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="二维码" />
        </div>
      </div>
    </SidebarStyled>
  )
}

export default memo(Sidebar)
