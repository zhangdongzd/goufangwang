import React from 'react'


import { Link } from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Confirm from '../../component_dev/confirm/src/'

class Buy extends React.Component {
	constructor(props) {
	    super(props)
		 this.state = {
	      Frist: [<div/>]    
	    }
	}
	Add (){
		console.info(this);
		console.log("ok")
	}
	componentWillMount (){
	 let msg = sessionStorage.getItem("userID")
  	 let frist=()=>{}
	    if(msg){
	    	console.log(frist)
      		frist = () => {
      			return (
	     				<div className="frist">
	     					<div className="top">
	     						<ul>
	     							<li activeClassName="active" onClick={this.Add.bind(this)}>
	     								<i className="yo-ico">&#xe6c1;</i>
	     								<b>未评价</b>
	     							</li>
	     							<li activeClassName="active" onClick={this.Add.bind(this)}>
	     								<i className="yo-ico">&#xe6c1;</i>
	     								<b>已评价</b>
	     							</li>
	     						</ul>
	     					</div>
	     					<div className="bottom">下面没内容了</div>
	     				</div>
      			)	
      		}		
	    }else{
    		 frist = ()=>{
    			return (
    				<div className="secend">
    					<div>需要您登录才能使用</div>
    					<Link to="/Register/登录" activeClassName="active">
   							<input type="button" value="登录"/>
   						</Link>
    				</div>
    			)
    			
    		}   		
	    }
	    this.setState({
	       Frist:frist() 
	    }) 
	 }
  render() {
    return (
      <div className="m-buy">
	       	{this.state.Frist}
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
)(Buy)