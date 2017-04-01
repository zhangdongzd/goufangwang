import React from 'react'
import fetchData from '../util/util.fetch.js'
class BoardMain extends React.Component {
	constructor(props) {
	    super(props)
			this.state = {
			      list: [<div/>],
			      list_bottom: [<div/>]
		    }
	 	}
	
	
		componentWillMount() {
		let url = '/api/list.php'
		fetchData(url,function (res) {
	//			console.log(res)
				let Les = res.tuijian.map(val=>{
					//console.log(val.feature)
					let reg = val.feature.split("、")
					//console.log(reg)
					let arr = reg.map(function (i){
						return (<span>{i}</span>)
					})
	//				console.log(arr)
					this.setState({
				        list_bottom:arr
				    })
	
					return (
						<div className="part02">
							<img alt="" title="" src={val.img} />
							<div className="part02-right">
								<h3>{val.lpname}</h3>
								<p className="part02-right01">
									<span>{val.minhouse}</span>
									<span>-</span>
									<span>{val.maxhouse}</span>
									<span> ㎡ </span>
									<span>| </span>
									<span>{val.minroom}</span>
									<span>-</span>
									<span>{val.maxroom}</span>
									<span>室</span>
									<span>{val.avgprice}</span>
									<span>元/平</span>
								</p>
								<p className="part02-right02">
									<span>{val.area} </span>
									<span>{val.address}</span>
								</p>
								<p className="part02-right03">
									{this.state.list_bottom}
								</p>
								
							</div>
						</div>
					)
				})
				
				this.setState({
			        list: Les
			    })
	
			}.bind(this))
		}
	
	
	render() {
		return (
			<div className="m-boardmain">
				<div className="part01">
				  <h2>推荐楼盘</h2>
				  <span>更多></span>
				</div>
				{ this.state.list }
				
			</div>
		)
	}
	

	
}

export default BoardMain
