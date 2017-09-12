import React from 'react'

export default class Sns extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<a className="sns" 
				href={ this.props.url }
				title={ this.props.title }
				target="_blank"
				style={{
					backgroundImage: `url(${ this.props.img })`
				}}>
				<div className="line line1"></div>
				<div className="line line2"></div>
				<div className="line line3"></div>
				<div className="line line4"></div>
			</a>
		)
	}
}
