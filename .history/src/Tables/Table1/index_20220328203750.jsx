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
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江",
  city: "杭州",
  type: "笔",
  price: "1",
  },
  {
  province: "浙江",
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
