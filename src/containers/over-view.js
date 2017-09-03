import { connect } from 'react-redux'
import OverView    from '../components/over-view.jsx'

const mapStateToProps = (state) => {
	return {
		story   : state.mode.story,
		loading : state.mode.loading,
		char_x  : state.size.char_x,
		char_w  : state.size.char_w,
		char_h  : state.size.char_h,
		width   : state.size.width,
		height  : state.size.height
	}
}

export default connect(
	mapStateToProps
)(OverView)
