import React from 'react'
import fetchData from '../util/util.fetch.js'

class Ershoufang extends React.Component {
	
	constructor(props) {
    	super(props)
		 
 	}
	
	render() {
		return (
			<div className="m-ershoufang">
				<ul className="header-list">
					<li>
						<select><option>区域</option></select>
					</li>
					<li>
						<select><option>总价</option></select>
					</li>
					<li>
						<select><option>户型</option></select>
					</li>
					<li>
						<select><option>更多</option></select>
					</li>
				</ul>
			</div>
		)
	}




}

export default Ershoufang