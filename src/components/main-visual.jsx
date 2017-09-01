import React from 'react'

// components
import Bg        from './bg.jsx'
import Character from '../containers/character'
import Clock     from '../containers/clock'
import Mask      from './mask.jsx'

export default class MainVisual extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="main-visual"
				style={{ 
					width: `${ this.props.width }px`,
					height: `${ this.props.height }px`
				}}>
				<Bg 
					width={ this.props.width }
					height={ this.props.height }
					url="./images/main-visual/bg.jpg"
				/>
				<Character
				url="./images/main-visual/satella.png"
				/>
				<Clock 
					width={ this.props.width }
					height={ this.props.height }
				/>
				<Mask
					width={ this.props.width }
					height={ this.props.height }
				/>
			</div>
		)
	}
}
