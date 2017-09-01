export default (state={}, action) => {
	switch(action.type) {
		case 'CHANGE_TIME':
			return { timestamp: action.timestamp }
		default: 
			return state
	}
}
