import React, { Component } from 'react'
import PubSub, { publishSync } from 'pubsub-js'
import axios from'axios'

export default class Search extends Component {


  search=()=>{

    PubSub.publish('atguigu',{name:'tom',age:18})

/*     //获取用户的输入(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}}=this;
    //发送请求前通知List更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true})
    //发送网络请求
    axios.get(`https://api.github.com/search/use rs?q=${keyWord}`).then(
      response=>{
        //请求成功后通知List更新状态
        // this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      error=>{
        //请求失败后通知List更新状态
        //  this.props.updateAppState({isLoading:false,err:error})
      }
    ) */

  }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索github用户</h3>
            <div>
             <input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
             <button onClick={this.search}>搜索</button>
            </div>
        </section>
    )
  }

}
