import { routers } from '@/routers'

import styled from 'styled-components'

const AppStyled = styled.div`
  height: 100vh;
`

function App() {
  const element = useRoutes(routers)
  return <AppStyled>{element}</AppStyled>
}

export default App
