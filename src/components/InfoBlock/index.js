import React from 'react'
import IconFont from '../IconFont'
import Styles from './index.scss'
import classNames from 'classnames/bind'
var cx = classNames.bind(Styles)
// import moment from 'moment'
class InfoBlock extends React.Component {
  render() {
    const { icon, title } = this.props
    return (
      <div className={cx('infoBlock_container')}>
        <div className={cx('infoBlock_head')}>
          <IconFont className={cx('infoBlock_iconStyle')} type={icon} />
          <span>{title}</span>
        </div>
        <div className={cx('infoBlock_body')}>{this.props.children}</div>
      </div>
    )
  }
}

export default InfoBlock
