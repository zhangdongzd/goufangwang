var React = require("react");
var ReactDOM = require("react-dom");

var HomeContent = require("./HomeContent.jsx");

var Login = React.createClass({
	getInitialState:function(){
		return null
	},
	login:function(){
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
					status:"login",
					userID:userID,
					password:password
				},
				beforeSend:function(){
					that.refs.btn.value = "正在登录";
					that.refs.btn.setAttribute("disabled","disabled")
					console.log(that.refs.btn)
				},
				success:function(data){
					that.refs.btn.value = "登录";
					that.refs.btn.removeAttribute("disabled")
					console.log( data);
					if(data == "0"){
						alert("您是黑户，身份证呢")
					}else if(data == "2"){
						alert("你太坏了，拿假的身份证欺骗我")
					}else{
						// alert("恭喜，你成功了")
						var content = document.getElementById("content");
						ReactDOM.unmountComponentAtNode(content);
						ReactDOM.render(<HomeContent />,content);
						var footer = document.getElementById("footer");
						var Footer = require("./Footer.jsx");
						ReactDOM.unmountComponentAtNode(footer);
						// setTimeout(function(){
						// 	console.log(Footer)
							ReactDOM.render(<Footer />,footer);

							localStorage.setItem("userID",userID);
							localStorage.setItem("isLogin","true");
						// },3000)
					}
					
				}
			})
		}
	},
	render:function(){
		return (
			<div>
				<input type="text" placeholder="用户名" ref="userID"/>
				<input type="password" placeholder="密码" ref="password"/>
				<input type="button" value="登录" ref="btn"  onClick={this.login}/>
			</div>
		);
	}
});

module.exports = Login;


