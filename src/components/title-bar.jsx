import React from 'react'

// components
import Logo   from './logo.jsx'
import SnsBox from './sns-box.jsx'

export default class TitleBar extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<header id="title-bar"
				style={{
					width: `${ this.props.width }px`,
					height: '120px'
				}}>
				<Logo 
					width={ this.props.width }
					height={ this.props.height }
				/>
				<SnsBox />
			</header>
		)
	}
}
