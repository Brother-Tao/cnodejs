import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PageHeaderStyled } from './styled.ts'
import SvgIcon from '@/components/SvgIcon/SvgIcon'
import { SearchOutlined } from '@ant-design/icons'
import { navs, type INav } from './config.ts'

interface Iprops {
  children?: ReactNode
}

const PageHeader: FC<Iprops> = () => {
  return (
    <PageHeaderStyled>
      <div className="main">
        <div className="left">
          <SvgIcon name="cnodejs_light" width={120} height={50} />
          <Input placeholder="" prefix={<SearchOutlined />} className="search" />
        </div>
        <div className="right">
          <div className="navs">
            {navs.map((item: INav) => (
              <Link to={item.path} className="nav" key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageHeaderStyled>
  )
}

export default memo(PageHeader)
