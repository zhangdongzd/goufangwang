var React = require("react");

var Register = React.createClass({
	getInitialState:function(){
		return null
	},
	register:function(){
		var userID = this.refs.userID.value;
		var password = this.refs.password.value;
		var that = this;
		if(userID == ""  || password ==""){
			alert("请完善信息");
		}else{
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"register",
					userID:userID,
					password:password
				},
				beforeSend:function(){
					that.refs.btn.value = "正在注册";
					that.refs.btn.setAttribute("disabled","disabled")
					console.log(that.refs.btn)
				},
				success:function(data){
					that.refs.btn.value = "注册";
					that.refs.btn.removeAttribute("disabled")
					console.log( data);

					
				}
			})
		}
	},
	render:function(){
		return (
			<div>
				<input type="text" placeholder="用户名" ref="userID"/>
				<input type="password" placeholder="密码" ref="password"/>
				<input type="button" value="注册" ref="btn"  onClick={this.register}/>
			</div>
		);
	}
});

module.exports = Register;


