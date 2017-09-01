export const changeSize = (width, height) => {
	if(width < 1100) width  = 1100
	if(height < 600) height = 600

	return {
		type: 'CHANGE_SIZE',
		width,
		height
	}
}
