import { NavLink } from 'react-router-dom'
import { ReactNode, useMemo } from 'react'
import style from './menu.module.scss'

interface MenuProps {
  routes: MenuItems[]
}
export interface MenuItems {
  title: string | ReactNode,
  path: string,
  children?: MenuItems[]
}

const Menu = (props: MenuProps) => {
  const { routes } = props
  return (
    <div className={style.menu}>
      {routes.map((item) => {
        {return Reflect.has(item, 'children') && item.children?.length ? 
          <Menu routes={item.children} /> :
            <NavLink to={item.path}>{item.title}</NavLink>
        }
      })}
    </div>
  )
}
export default Menu