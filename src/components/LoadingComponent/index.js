import React from 'react'
import Styles from './index.scss'
import classNames from 'classnames/bind'
var cx = classNames.bind(Styles)

class LoadingComponent extends React.Component {
  render() {
    return (
      <div className={cx('loading2')}>
        <div className={cx('circle', 'circle1')} />
        <div className={cx('circle', 'circle2')} />
        <div className={cx('circle', 'circle3')} />
      </div>
    )
  }
}

export default LoadingComponent
