import React           from 'react'
import { createStore } from 'redux'
import { render }      from 'react-dom'
import { Provider }    from 'react-redux'
import reducer         from './reducers'
import Actions         from './actions'
import App             from './containers/app'

const store = createStore(reducer)
store.dispatch(Actions.changeTime(new Date().getTime()))
store.dispatch(Actions.changeSize(window.innerWidth, window.innerHeight))

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
)

window.addEventListener('resize', (e) => {
	store.dispatch(Actions.changeSize(
		window.innerWidth,
		window.innerHeight
	))
}, false)

const timer = setInterval(() => {
	store.dispatch(Actions.changeTime(new Date().getTime()))
}, 1000)
