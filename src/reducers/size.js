const char_base_w = 800
,     char_base_h = 1025
,     clock_base  = 300
,     clock_y     = 50

export default (state={}, action) => {
	const per = (action.height - 120) / char_base_h

	switch(action.type) {
		case 'CHANGE_SIZE':
			return { 
				width      : action.width, 
				height     : action.height,
				char_w     : char_base_w * per,
				char_h     : char_base_h * per,
				char_x     : (action.width - (char_base_w * per)) / 2,
				clock_size : clock_base * per,
				clock_x    : (action.width / 2) - ((clock_base * per) / 2),
				clock_y    : action.height - ((clock_base * per) - (clock_y * per)),
				nav        : getNavPos(action, per)
			}
		default:
			return state
	}
}

const getNavPos = (action, per) => {
	let width  = action.width
	,   height = action.height
	,   char_w = char_base_w * per
	,   char_h = char_base_h * per
	,   diff_y = ((height - 120) - (250 * 2)) / 3

	let pos = [
		[0, 120, 'rgba(255,255,255,0.5)'],
		[action.width - 50, 0, 'rgba(255,255,255,0.5)'],
		[action.width, action.height - 100, 'rgba(255,255,255,0.5)'],
		[40, action.height, 'rgba(255,255,255,0.5)'],
		[
			((((width - char_w) / 2) - 200) / 2) + 100,
			diff_y + 100 + 120,
			'#fff'
		],
		[
			((((width - char_w) / 2) - 200) / 2) + 100,
			(diff_y * 2) + 250 + 100 + 120,
			'#fff'
		],
		[
			((((((width - char_w) / 2) - 200) / 2) + 100) * 3) + char_w,
			diff_y + 100 + 120,
			'#fff'
		],
		[
			((((((width - char_w) / 2) - 200) / 2) + 100) * 3) + char_w,
			(diff_y * 2) + 250 + 100 + 120,
			'#fff'
		]
	]

	return pos
}	
