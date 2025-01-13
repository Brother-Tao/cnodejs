import type { FC, ReactNode } from 'react'
import PageHeader from '@/components/PageHeader/PageHeader'
import PageFooter from '@/components/PageFooter/PageFooter'

interface Iprops {
  children?: ReactNode
}

const LayOut: FC<Iprops> = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  )
}

export default memo(LayOut)
