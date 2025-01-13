import type { FC, ReactNode } from 'react'
interface Iprops {
  children?: ReactNode
}

const About: FC<Iprops> = () => {
  return <div> About</div>
}

export default memo(About)
