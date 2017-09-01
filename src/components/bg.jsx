import React from 'react'

export default class Bg extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="bg" 
				style={{ 
					width: `${ this.props.width }px`,
					height: `${ this.props.height }px`,
					backgroundImage: `url(${ this.props.url })` 
				}}>
			</div>
		)
	}
}
