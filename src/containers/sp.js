import { connect } from 'react-redux'
import SP          from '../components/sp.jsx'

const mapStateToProps = (state) => {
  return {
    width  : state.size.width,
    height : state.size.height,
    mode   : state.mode.menu
  }
}

export default connect(
  mapStateToProps
)(SP)
