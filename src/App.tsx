import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import About from '@/pages/about/About'
import Detail from '@/layouts/detail'
import './App.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: 'detail',
        element: <Detail/>
      }
    ]
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
