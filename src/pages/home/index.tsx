import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { PercentBar } from '../../components'
import { namespace } from '../../models/home'
// import { I18NProps, I18NHOC } from '../../i18n/context'
// import styles from './style.module.scss'

interface IProps extends IDispatch {
  count: number
}

const HomePage: React.FC<IProps> = ({ count, dispatch }) => {
  const history = useHistory()

  const clickFun = () => {
    dispatch({
      type: `${namespace}/setState`,
      payload: {
        count: count + 1
      }
    })
  }

  return (
    <div className="homePage">
      <p className="title">this is home page</p>
      <div className="content">
        <PercentBar
          width={450}
          height={4}
          borderRadius={2}
          acColor="#8751de"
          bgColor="#ededed"
          percentage={45}
        />
      </div>
      <div onClick={() => history.push('/about')}>go about</div>
      <p>点击了{count}次</p>
      <div onClick={clickFun}>点击按钮</div>
    </div>
  )
}

const mapStateToProps = (models: any) => ({
  ...models[namespace],
})

export default connect(mapStateToProps)(HomePage)
