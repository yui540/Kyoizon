import { connect } from 'react-redux'
import App         from '../components/app.jsx'

const mapStateToProps = (state) => {
	return {
		width  : state.size.width,
		height : state.size.height
	}
}

export default connect(
	mapStateToProps
)(App)
