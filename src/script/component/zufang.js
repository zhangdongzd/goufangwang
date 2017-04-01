import React from 'react'
import fetchData from '../util/util.fetch.js'

class Zufang extends React.Component {
	
	constructor(props) {
    	super(props)
		this.state = {
		      list: [<div/>]
//		      ,
//		      list_bottom: [<div/>]
	    }
 	}
	
	render() {
		return (
			<div className="m-zufang">
				<ul className="header-list">
					<li>
						<select><option>区域</option></select>
					</li>
					<li>
						<select><option>租金</option></select>
					</li>
					<li>
						<select><option>户型</option></select>
					</li>
				</ul>
				
				{ this.state.list }
			</div>
		)
	}
	
	
	componentDidMount() {
		let url = '/api/zufanglist.php'
		fetchData(url,function (res) {
//			console.log(res)
			let Les = res.Table.map(val=>{
//				console.log(val)
//				console.log(val.img)



				return (
					<div className="part02">
						<img alt="" title="" src={val.img} />
						<div className="part02-right">
							<h3>{val.title}</h3>
							<p className="part02-right01">
								<span>{val.areainfo} </span>
								<span> {val.addrinfo} </span>
								<span> {val.v_price} </span>
							</p>
							<p className="part02-right02">
								<span>{val.v_houselayout} </span>
								<span>{val.v_housesize}</span>
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

}

export default Zufang