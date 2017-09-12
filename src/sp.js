import React           from 'react'
import { createStore } from 'redux'
import { render }      from 'react-dom'
import { Provider }    from 'react-redux'
import reducer         from './reducers'
import Actions         from './actions'
import SP              from './containers/sp'
import preload         from './utills/preload'

// store
const store = createStore(reducer)
store.dispatch(Actions.changeTime(new Date().getTime()))
store.dispatch(Actions.changeSizeSp(screen.width, screen.height))
store.dispatch(Actions.changeLoadingMode('close'))
store.dispatch(Actions.changeStoryMode('init'))
// preload images
/*preload(() => {
	store.dispatch(Actions.changeLoadingMode('close'))
	store.dispatch(Actions.changeStoryMode('init'))
})*/

render(
	<Provider store={ store }>
		<SP />
	</Provider>,
	document.getElementById('root')
)

/* resize ------------------------------------------------------------------ */
window.addEventListener('resize', (e) => {
	store.dispatch(Actions.changeSize(
		screen.width,
		screen.height
	))
}, false)

