import { useDispatch } from 'react-redux'
import { Button, Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { increment, decrement, multiplication } from '~/store/features/counterSlice'
import { getMovieData } from '~/store/features/movieSlice'

interface ActionProps {
  defaultActiveKey?: string
}
const Add = () => {
  const dispatch = useDispatch()
  return(
    <Button onClick={()=>{dispatch(increment())}}>增加</Button>
  )
}
const Del = () => {
  const dispatch = useDispatch()
  return(
    <Button onClick={()=>{dispatch(decrement())}}>减少</Button>
  )
}
const Mulit = () => {
  const dispatch = useDispatch()
  return(
    <Button onClick={()=>{dispatch(multiplication())}}>平方</Button>
  )
}
const GetList = () => {
  const dispatch = useDispatch()
  return(
    <Button onClick={()=>{dispatch(getMovieData())}}>获取数据</Button>
  )
}
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'A计划',
    children: <Add/>
  },
  {
    key: '2',
    label: 'B计划',
    children: <Del/>
  },
  {
    key: '3',
    label: 'C计划',
    children: <Mulit/>
  },
  {
    key: '4',
    label: '白嫖计划',
    children: <GetList/>
  }
]
const onChange = (key: string) => {
  console.log('key', key);
}
const Action = (props: ActionProps) => {
  const { defaultActiveKey = items[0].key } = props
  return (
    <div>
      <Tabs defaultActiveKey={defaultActiveKey} items={items} onChange={onChange}/>
    </div>
  )
}
export default Action