const Home = lazy(() => import('@/views/Home/Home'))
const Login = lazy(() => import('@/views/Login/Login'))
const Guide = lazy(() => import('@/views/Guide/Guide.tsx'))
const About = lazy(() => import('@/views/About/About.tsx'))
const NotFound = lazy(() => import('@/views/NotFound/NotFound.tsx'))
const Api = lazy(() => import('@/views/API/Api.tsx'))
const Register = lazy(() => import('@/views/Register/Register.tsx'))
const TopicInfo = lazy(() => import('@/views/TopicInfo/TopicInfo.tsx'))

export { Home, Login, Guide, About, NotFound, Api, Register, TopicInfo }
