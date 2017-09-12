import React from 'react'

export default class Story extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="story"
				data-mode={ this.props.mode }
				style={{
					width  : `${ this.props.width }px`,
					height : `${ this.props.height }px`
				}}>
				<div className="satella"
					style={{ 
						width  : `${ this.props.width }px`,
						height : `${ this.props.height }px`
					}}>
					<div className="item" 
						style={{
							bottom : '0',
							left   : `${ this.props.char_x }px`,
							width  : `${ this.props.char_w }px`,
							height : `${ this.props.char_h }px`
						}}>
					</div>
					<div className="text"
						style={{
							width: `${ this.props.width }px`,
							height: '50px',
							top: `${ this.props.height / 2 - 25 }px`
						}}>
					</div>
				</div>
			</div>
		)
	}
}
