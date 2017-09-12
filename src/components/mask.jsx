import React from 'react'

export default class Mask extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="mask"
				style={{
					width: `${ this.props.width }px`,
					height: `${ this.props.height }px`
				}}>
			</div>
		)
	}
}
