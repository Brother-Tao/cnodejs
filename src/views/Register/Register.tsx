import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Register: FC<Iprops> = () => {
  return <div> Register</div>
}

export default memo(Register)
