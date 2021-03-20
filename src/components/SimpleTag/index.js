/*
 * @Descripttion:
 * @version:
 * @Author: Yanzengyong
 * @Date: 2020-12-30 17:15:19
 * @LastEditors: Shenling
 * @LastEditTime: 2021-02-04 14:41:22
 */
import React from 'react'
import Ellipsis from '../Ellipsis'
import Styles from './index.scss'
import classNames from 'classnames/bind'
var cx = classNames.bind(Styles)

export default class SimpleTag extends React.Component {
  render() {
    const { name, style } = this.props

    return (
      <Ellipsis
        style={style}
        className={cx('simpleTag_container')}
        line={1}
        text={name}
      />
    )
  }
}
