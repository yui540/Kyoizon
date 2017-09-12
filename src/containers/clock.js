import { connect } from 'react-redux'
import Clock       from '../components/clock.jsx'

const mapStateToState = (state) => {
	return {
		timestamp : state.time.timestamp,
		size      : state.size.clock_size,
		x         : state.size.clock_x,
		y         : state.size.clock_y
	}
}

export default connect(
	mapStateToState	
)(Clock)
