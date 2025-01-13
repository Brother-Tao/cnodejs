import type { FC, ReactNode } from 'react'
interface Iprops {
  children?: ReactNode
}

const Guide: FC<Iprops> = () => {
  return <div>Guide</div>
}

export default memo(Guide)
