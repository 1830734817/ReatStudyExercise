import React, { Component } from 'react'
import {Line} from '@ant-design/charts'
import Histogram from './charts/Histogram/idnex'

export default class App extends Component {
  render() {
    return (
      <div>
        <Histogram/>
      </div>
    )
  }
}
