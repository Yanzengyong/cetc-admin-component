import React, { Component } from 'react'
import { Button as OldButton } from '@alifd/next'
import PropTypes from 'prop-types'
import 'cetc-admin-component/dist/index.css'

class Button extends Component {
  static propTypes = {
    /** 名称 */
    children: PropTypes.node.isRequired,
    /** 颜色 */
    color: PropTypes.string,
    /** 大小：'small', 'normal', 'large' */
    size: PropTypes.string,
    /** 是否仅用 */
    disabled: PropTypes.bool,
    /** 点击事件 */
    onClick: PropTypes.func
  }

  static defaultProps = {
    color: '#333',
    size: 'normal',
    disabled: false,
    onClick: (event) => {
      // eslint-disable-next-line no-console
      console.log('You have clicked me!', event.target)
    }
  }

  render() {
    return (
      <OldButton type='primary'>{this.props.children}</OldButton>
    )
  }
}

export default Button
