import React from 'react'

export default class Character extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * スタイルの取得
	 * @return style
	 */
	getStyle() {
		return {
			width: `${ this.props.width }px`,
			height: `${ this.props.height }px`,
			left: `${ this.props.x }px`,
			backgroundImage: `url(${ this.props.url })`,
			bottom: '0'
		}
	}

	/**
	 * 描画
	 */
	render() {
		let style = this.getStyle()

		return (
			<div className="character"
				style={ style }>
			</div>
		)
	}
}
