import React from 'react'


import { Link } from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class My extends React.Component {
	 constructor(props) {
    super(props)

  }
	 
  render() {
    return (
      <div className="m-my">
	        <div className="header">
	        	<div>你还没登录哦 ! !</div>
	        	<input type="button" value="登录"/>
	        </div>
	        <ul className="list">
	        	<li>
	        		<b className="yo-ico">&#xe666;</b>
	            	<i>客服电话(400-803-5055)</i>
	            	<span>></span>
	        	</li>
	        	<li>
	        		<b className="yo-ico">&#xe6fb;</b>
	            	<i>我的看房团</i>
	            	<span>></span>
	        	</li>
	        	<li>
	        		<b className="yo-ico">&#xe61f;</b>
	            	<i>我的收藏</i>
	            	<span>></span>
	        	</li>
	        	<li>
	        		<b className="yo-ico">&#xe691;</b>
	            	<i>我的顾问</i>
	            	<span>></span>
	        	</li>
	        	<li>
	        		<b className="yo-ico">&#xe622;</b>
	            	<i>我的卖房信息</i>
	            	<span>></span>
	        	</li>
	        	<li>
	        		<b className="yo-ico">&#xe62f;</b>
	            	<i>房贷计算</i>
	            	<span>></span>
	        	</li>
	        </ul>
      </div>
    )
  }
    componentDidUpdate() {
    let title = this.props.routes[1].title
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(My)

