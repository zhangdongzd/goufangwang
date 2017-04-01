import React from 'react'


import { Link } from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Confirm from '../../component_dev/confirm/src/'
class My extends React.Component {
	 constructor(props) {
	    super(props)
	    
		this.state = {
	      name: ""
	    }
		
	  }
	 componentWillMount (){
	 	let  msg = sessionStorage.getItem("userID")
	    if(msg){	
	    		this.state.name = msg;
	      		
	    }else{
	    		this.state.name = "你还没登录哦 ! !";
	      		
	    }
	   
	    
	 }
  render() {
	
    return (
      <div className="m-my">
	        <div className="header">
	        	<div >{this.state.name}</div>
	        	<Link to="/Register/登录" activeClassName="active">
	        		<input className="button" type="button" value="登录" />
	        	</Link>
	        	<input className="button1" type="button" onClick={this.quit.bind(this)} value="退出"/>
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

	
	quit () {
	    Confirm({
			    content:'确定退出么?',
			    btnText:['确定','取消']
			}).then(
				res => {
					console.log(res)
					if(res==true){
						sessionStorage.removeItem("userID")
						location.reload(true)
					}
				}	
			)
	}
	componentDIdMount(){
		
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

