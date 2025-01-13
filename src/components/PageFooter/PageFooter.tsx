import type { FC, ReactNode } from 'react'
import { PageFooterWrapper } from './styled.ts'

interface Iprops {
  children?: ReactNode
}

const PageFooter: FC<Iprops> = () => {
  return <PageFooterWrapper> PageFooter</PageFooterWrapper>
}

export default memo(PageFooter)
