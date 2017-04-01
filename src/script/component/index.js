import React from 'react'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Index extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="m-index">
        <header>
          <div className="yo-header yo-header-a">
            <h2 className="title">{this.props.value}</h2>
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
        <footer>
          <ul>
            <li className="active">
              <Link to="/board" activeClassName="active">
                <i className="yo-ico">&#xe600;</i>
                <b>购房网</b>
              </Link>
            </li>
            <li>
              <Link to="/buy" activeClassName="active">
                <i className="yo-ico">&#xe65a;</i>
                <b>看房</b>
              </Link>
            </li>
            <li>
            <Link to="/send" activeClassName="active">
              <i className="yo-ico">&#xe601;</i>
              <b>卖房</b>
            </Link>
            </li>
            <li>

            <Link to="/my" activeClassName="active">

              <i className="yo-ico">&#xe641;</i>
              <b>我的</b>
            </Link>
            </li>
          </ul>
        </footer>
      </div>
    )
  }

  componentDidMount() {
   let title = this.props.routes[1].title
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
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
)(Index)
