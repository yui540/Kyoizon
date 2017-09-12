import { connect } from 'react-redux'
import Actions     from '../actions'
import MenuView    from '../components/menu-view.jsx'

const mapStateToProps = (state) => {
  return {
    width: state.size.width,
    height: state.size.height,
    mode: state.mode.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigatePage: (title) => {
      dispatch(Actions.changeStoryMode(title))
    },
    closeMenu: () => {
      dispatch(Actions.changeMenuMode('close'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuView)
