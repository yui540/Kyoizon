import React from 'react'

export default class Clock extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * スタイルの取得
	 * @return style
	 */
	getStyle() {
		let date    = new Date(this.props.timestamp)
		,   hours   = (date.getHours() % 12) * (360 / 12)
		,   minutes = 360 * (date.getMinutes() / 60)
		,   seconds = 360 * (date.getSeconds() / 60)

		return {
			clock: {
				width: `${ this.props.size }px`,
				height: `${ this.props.size }px`,
				left: `${ this.props.x }px`,
				top: `${ this.props.y }px`
			},	
			secondHand3: { transform: `rotate(${ seconds }deg)` },
			secondHand2: { transform: `rotate(${ hours }deg)` },
			secondHand1: { transform: `rotate(${ minutes }deg)` }
		}
	}

	/**
	 * 描画
	 */
	render() {
		let style = this.getStyle()

		return (
			<div className="clock" style={ style.clock }>
				<div className="second-hand-1" 
					style={ style.secondHand1 }>
				</div>
				<div className="second-hand-2" 
					style={ style.secondHand2 }>
				</div>
				<div className="second-hand-3"
					style={ style.secondHand3 }>
				</div>
			</div>
		)
	}
}
