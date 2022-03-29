import React, { Component } from 'react'
import {SheetComponent} from '@antv/s2-react'
import '@antv/s2-react/dist/style.min.css'

const s2DataConfig = {
  fields: {
  rows: ['province', 'city'],
  columns: ['type'],
  values: ['price'],
  },
  data: [
  {
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江1",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江2",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江3",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江4",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江5",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江6",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江7",
  city: "杭州",
  type: "笔",
  price: "1",
  }
]
};


const s2Options={
  width:600,
  height:600
}
 
    
 

export default class Table1 extends Component {
  render() {
    return (
      <SheetComponent 
      dataCfg={s2DataConfig}
      options={s2Options}
      />
    )
  }
}
