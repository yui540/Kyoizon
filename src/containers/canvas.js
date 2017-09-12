import { connect } from 'react-redux'
import Canvas      from '../components/canvas.jsx'

const mapStateToProps = (state) => {
	return {
		width      : state.size.width,
		height     : state.size.height,
		clock_size : state.size.clock_size,
		char_w     : state.size.char_w,
		char_h     : state.size.char_h,
		clock_x    : state.size.clock_x,
		clock_y    : state.size.clock_y,
		nav        : state.size.nav
	}
}

export default connect(
	mapStateToProps
)(Canvas)
