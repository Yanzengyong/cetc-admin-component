import React from 'react'
import { Button } from '@alifd/next'
import PropTypes from 'prop-types' // 类型检查
// import Styles from './index.scss'

export default class AdvanceBtn extends React.Component {
  render() {
    const { displayAdvance, showAdvance, id } = this.props
    return (
      <Button
        text
        type='primary'
        id={id}
        onClick={showAdvance}
        // className={Styles.advanceBtn_style}
      >
        <span style={{ marginRight: 5 }}>{displayAdvance ? '-' : '+'}</span>
        <span>高级</span>
      </Button>
    )
  }
}

// props默认值指定
AdvanceBtn.defaultProps = {
  displayAdvance: false,
  id: 'advanceBtn',
  showAdvance: () => {}
}

AdvanceBtn.propTypes = {
  /** 高级按钮是否展开T/F */
  displayAdvance: PropTypes.bool,
  /** 高级按钮区块id名称，用于定位 */
  id: PropTypes.string,
  /** 高级按钮点击function */
  showAdvance: PropTypes.func
}
