import { connect } from 'react-redux'
import Character   from '../components/character.jsx'

const mapStateToState = (state) => {
	return {
		width  : state.size.char_w,
		height : state.size.char_h,
		x      : state.size.char_x
	}
}

export default connect(
	mapStateToState
)(Character)
