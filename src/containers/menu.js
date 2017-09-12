import { connect }   from 'react-redux'
import Actions       from '../actions'
import Menu          from '../components/menu.jsx'

const mapStateToProps = (state) => {
  return {
    size: state.size.clock_size,
    x: state.size.clock_x,
    y: state.size.clock_y,
    mode: state.mode.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: () => {
      dispatch(Actions.changeMenuMode('open'))     
    },
    closeMenu: () => {
      dispatch(Actions.changeMenuMode('close'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
