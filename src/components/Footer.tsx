import { Button } from 'antd'

interface FooterProps {
  action: () => void
}

const Footer = (props: FooterProps) => {
  const { action } = props
  return (
    <div>
      <Button type='primary' onClick={action}>耗儿药</Button>
      <Button type='dashed'>敌敌畏</Button>
    </div>
  )
}
export default Footer