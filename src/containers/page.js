import { connect } from 'react-redux'
import Actions     from '../actions'
import Page        from '../components/page.jsx'

const mapStateToProps = (state) => {
	return {
		width  : state.size.width,
		height : state.size.height,
		mode   : state.mode.story
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickClose: (mode) => {
			dispatch(Actions.changeStoryMode(mode))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Page)
