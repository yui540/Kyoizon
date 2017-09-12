import { connect } from 'react-redux'
import Actions     from '../actions'
import NavBox      from '../components/nav-box.jsx'

const mapStateToProps = (state) => {
	return {
		width  : state.size.width,
		height : state.size.height,
		nav    : state.size.nav.slice(4, 8)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		navigatePage: (title) => {
			dispatch(Actions.changeStoryMode(title))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBox)
