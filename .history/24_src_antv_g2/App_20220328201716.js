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
/* 
基于 AntV 技术栈还有许多优秀的项目，在 React 环境下使用 G2，我们推荐使用 Ant Design Charts，BizCharts 和 Viser。这三个产品都是基于 G2 的 React 版本封装
Ant Design Charts 地址：https://charts.ant.design
BizCharts 地址：https://bizcharts.net
Viser 地址：https://viserjs.github.io/

1、 G2、G2Plot、Ant Design Charts 什么关系？
同一团队开发。
G2 是 G2Plot 的底层依赖，使用了图形语法，使用成本相对较高，功能强大。
G2Plot 是 G2 的上层封装，把图形语法装换成了配置项。
Ant Design Charts 是 G2Plot 的 React 版本，功能和 G2Plot 同步，并内置了一些图相关的图表，例如流程图、组织架构图等。
其它一些图表是其它团队的同学基于 G2 或 G2Plot 实现。

*/