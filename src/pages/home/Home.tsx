import { Routes, Route } from 'react-router'
import Menu, { MenuItems } from '@/components/Menu'
import Detail from '@/layouts/detail'
import InfoTable from '@/layouts/infoTable'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import style from './Home.module.scss'

// import About from '../about/About'

const routes: MenuItems[] = [
  {
    title: '首页',
    path: '',
  },
  {
    title: '关于我们',
    path: 'about'
  },
  {
    title: '商家',
    path: 'login'
  },
]

const Home = ()=> {
  return (
    <div className={style.home}>
      <Menu routes={routes} />

       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Routes>
        <Route path='/' Component={Detail}/>
        <Route path='/table' Component={InfoTable}/>
      </Routes>
    </div>
  )
}
export default Home