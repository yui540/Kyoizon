import { combineReducers } from 'redux'

// reducer
import size from './size'
import time from './time'
import mode from './mode'

export default combineReducers({
	size,
	time,
	mode
})
