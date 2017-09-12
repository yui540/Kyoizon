export default (state={}, action) => {
	switch(action.type) {
		case 'CHANGE_STORY_MODE':
			return Object.assign({}, state, {
				story: action.mode
			})
		case 'CHANGE_LOADING_MODE':
			return Object.assign({}, state, { 
				loading: action.mode 
			})
    case 'CHANGE_MENU_MODE':
      return Object.assign({}, state, {
        menu: action.mode
      })
		default:
			return state
	}
}
