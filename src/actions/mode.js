export const changeStoryMode = (mode) => {
	return {
		type: 'CHANGE_STORY_MODE',
		mode
	}
}

export const changeLoadingMode = (mode) => {
	return {
		type : 'CHANGE_LOADING_MODE',
		mode
	}
}

export const changeMenuMode = (mode) => {
	return {
		type : 'CHANGE_MENU_MODE',
		mode
	}
}
