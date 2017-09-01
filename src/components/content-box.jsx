import React from 'react'

// components
import MainVisual from './main-visual.jsx'

export default class ContentBox extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<article id="content-box"
				style={{ width: this.props.width, height: this.props.height }}>
				<MainVisual
					width={ this.props.width }
					height={ this.props.height }
				/>
			</article>
		)
	}
}
