import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/InfoActions'

class InfoActions extends Component {
  constructor(props) {
    super(props)

    // const socket = require('socket.io-client')('http://localhost:3000');
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="circle">
          <div styleName="inner-box">
            <div styleName="icon">
              ♤
            </div>
            <div styleName="text">
              Some information from the system
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(InfoActions, styles)