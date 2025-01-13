import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Api: FC<Iprops> = () => {
  return <div> Api</div>
}

export default memo(Api)
