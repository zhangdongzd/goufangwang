import React from 'react'


import { Link } from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import Confirm from '../../component_dev/confirm/src/'

class Send extends React.Component {
	constructor(props) {
	    super(props)
		 this.state = {
	      Frist: [<div/>]    
	    }
	}
	componentWillMount (){
	 let msg = sessionStorage.getItem("userID")
  	 let frist=()=>{}
	    if(msg){
	    	console.log(frist)
      		frist = () => {
      			return (
	      			<div className="frist">
	      					<input className="inpt" type="text" placeholder="请输入或选择小区名称"/>
	      					<input className="inpt" type="text" placeholder="请输入或选择行政街道"/>
	      					
	      					<div className="box">
	      						<div>
	      							<input type="text"/><span>单元,</span>
	      							<input type="text"/><span>室</span>
	      						</div>
	      						<div className="oclick">2室2厅1卫∨</div>
	      					</div>
	      					
	      					<div className="box1">
	      						<div><input type="text" placeholder="面积"/> m²</div>
	      						<div className="inpu">
	      							第<input type="text"/>层,共<input type="text"/>层
	      						</div>
	      						<div className="inpu1">
	      							¥ <input type="text" placeholder="实价"/> 万
	      						</div>
	      						
	      						<select>
	      							<option>精装</option>
	      							<option>豪装</option>
	      							<option>中装</option>
	      							<option>简装</option>
	      							<option>毛培</option>
	      						</select>
	      					</div>
	      					
	      					<div className="box2">
	      						<div className="table">
	      								<div>
	      									<div>南北</div>
	      									<div>东南北</div>
	      									<div>西南北</div>
	      									<div>南</div>
	      									<div>西</div>
	      								</div>
	      								<div>
	      									<div>北</div>
	      									<div>东南</div>
	      									<div>西南</div>
	      									<div>西北</div>
	      									<div>东北</div>
	      								</div>
	      								<div>
	      									<div className="one1">东</div>
	      									<div className="one1">东西</div>
	      								</div>
	      						</div>
	      					</div>
	      					
	      					<div className="box3">
	      						<div>
	      							姓 名  &nbsp; &nbsp;<input className="Input" type="text" placeholder="姓名"/>
	      						</div>
	      						<div>
	      							手机号  <input className="Input1" type="text" placeholder="手机号"/>
	      						</div>
	      					</div>
	      					<input className="keep" type="button" value="保存"/>
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
	      <div className="m-send">
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
)(Send)