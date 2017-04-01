import React from 'react'
import { Link } from 'react-router'
import Carousel from '../../component_dev/carousel/src/'
import BoardMain from './board_main.js'
class Board extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="m-board">
        <div className="swiper">

          <Carousel>
					    <li className="item"><img className="img" src="http://common.goufang.com/2013/webapp/images/index.jpg" /></li>  
					    <li className="item"><img className="img" src="http://common.goufang.com/2013/webapp/images/index2.jpg" /></li>
					</Carousel>
        </div>
        <ul>
              <li>
               <Link to="/xinfang">
               <img alt="" src="./images/banner01.png"/>
                <b>新房</b>
                </Link>
              </li>
              <li>
	              <Link to="/ershoufang">
	                <img alt="" src="./images/banner02.png"/>
	                <b>二手房</b>
	              </Link>
              </li>
              <li>
               <Link to="/zufang">
                <img alt="" src="./images/banner03.png"/>
                <b>租房</b>
                </Link>
              </li>
              <li>
              <Link to="/send">
                <img alt="" src="./images/banner04.png"/>
                <b>卖房</b>
                </Link>
              </li>
        </ul>

        	      <div className="part01">
								      	<div className="part01-left">
								      		<img alt="" title="" src="./images/jiameng.png"/>
								      		
								      		<span className="jiameng-span">
								      			<span className="jiameng-top">加盟我们</span>
								      			<span className="jiameng-bottom">开创新格局</span>
								      		</span>
								      	</div>
								      	
								      	<div className="part01-right">
								      		<img alt="" title="" src="./images/goufang.png"/>
								      		
								      		<span className="goufang-span">
									      		<span className="goufang-top">购房网</span>
									      		<span className="goufang-bottom">免费接送</span>
								      		</span>
								      	</div>
					      </div>
  				     
					      <BoardMain />
      
      </div>
        
    )
  }
  
  
}

export default Board
