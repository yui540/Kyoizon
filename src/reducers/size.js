const char_base_w = 800
,     char_base_h = 1025
,     clock_base  = 300
,     clock_y     = 50

export default (state={}, action) => {
	const per = (action.height - 120) / char_base_h

	switch(action.type) {
		case 'CHANGE_SIZE':
			return { 
				width  : action.width, 
				height : action.height,
				char_w : char_base_w * per,
				char_h : char_base_h * per,
				char_x : (action.width - (char_base_w * per)) / 2,
				clock_size : clock_base * per,
				clock_x    : (action.width / 2) - ((clock_base * per) / 2),
				clock_y    : -(clock_y * per)
			}
		default:
			return state
	}
}
