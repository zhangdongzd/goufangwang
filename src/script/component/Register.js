import React from 'react'


import { Link,browserHistory} from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'



class Register extends React.Component {
	 constructor(props) {
	    super(props)
		
	 }
	register (){
		console.info(this);
		//console.info(this.refs.userID);
		let userID = this.refs.userID.value;
		let password = this.refs.password.value;
		let that = this;
		if(userID == ""  || password ==""){
			alert("请完善信息");
		}else{
			 fetch("http://datainfo.duapp.com/shopdata/userinfo.php", {  
	            method: "POST",  
	            mode: "cors",  
	            body: {
						status:"register",
						userID:userID,
						password:password
					}  
	        }).then(function (res) {  
	            if(res){  
	                console.log("ok")
	                 sessionStorage.setItem("userID", userID);
	                  browserHistory.goBack(); 
	            }
	             
	        })
		}
	}
	fontTouch (){
		console.log(this)
	}
	render () {
		return (
			<div className="m-register">
				<header>
		          <div className="yo-header yo-header-b">
		   			<span onClick={this.back} className="regret yo-ico">&#xe63b;</span>
		            <h2 className="title">{this.props.value}</h2> 
		          </div>
		        </header>
		        <div className="table">
		        <b> 您的号码即购房网用户名,我们会严格保密</b>
				<input type="text" placeholder="手机号码" ref="userID" />
				<input className="pwd" type="password" placeholder="密码" ref="password"/>
				<input className="btn" type="button" value="立即登录"  onClick={this.register.bind(this)}/>
				</div>
			</div>
		)
	}
	
	
	back() {
	   browserHistory.goBack()
	}
	
	 componentDidMount() {
	   let title = this.props.params.type
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	  }
	 componentDidUpdate () {
	 	
	    let title = this.props.params.type
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

