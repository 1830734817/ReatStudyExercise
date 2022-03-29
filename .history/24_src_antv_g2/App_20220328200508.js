import React, { Component } from 'react'
import LineChart from './charts/LineChart/idnex'
import Histogram from './charts/Histogram/index'

export default class App extends Component {
  render() {
    return (
      <div>
        <LineChart/>
        <Histogram/>
      </div>
    )
  }
}
