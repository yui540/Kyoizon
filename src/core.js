import React           from 'react'
import { createStore } from 'redux'
import { render }      from 'react-dom'
import { Provider }    from 'react-redux'
import reducer         from './reducers'
import Actions         from './actions'
import App             from './containers/app'
import preload         from './utills/preload'

// store
const store = createStore(reducer)
store.dispatch(Actions.changeTime(new Date().getTime()))
store.dispatch(Actions.changeSize(window.innerWidth, window.innerHeight))

// preload images
preload(() => {
	store.dispatch(Actions.changeLoadingMode('close'))
	store.dispatch(Actions.changeStoryMode('init'))
})

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
)

/* resize ------------------------------------------------------------------ */
window.addEventListener('resize', (e) => {
	store.dispatch(Actions.changeSize(
		window.innerWidth,
		window.innerHeight
	))
}, false)

/* change time ------------------------------------------------------------- */
const timer = setInterval(() => {
	store.dispatch(Actions.changeTime(new Date().getTime()))
}, 1000)
