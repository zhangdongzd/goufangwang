import { createStore } from 'redux'

function changer(state = {title:'大连 - 购房网'}, action) {
  switch (action.type) {
    case 'SETTITLE':
      return { title: action.title }
    default:
      return state
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps(state) {
  return {
    value: state.title
  }
}

// 将 Redux actions 转化成 组件的 props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (action) => dispatch(action)
  }
}

let store = createStore(changer)

export { mapStateToProps, mapDispatchToProps, store }
