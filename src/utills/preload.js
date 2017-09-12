import json from '../config/preload.json'

export default (fn) => {
	let len  = json.length
	,   load = 0

	for(let i=0; i < len; i++) {
		let img = new Image()
		img.src = json[i]
		img.onload = () => {
			load += 1
			if(load >= len) fn()
		}
	}
}
