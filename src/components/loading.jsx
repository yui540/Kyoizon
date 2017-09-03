import React from 'react'

export default class Loading extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="loading"
				data-mode={ this.props.mode }
				style={{
					width  : `${ this.props.width }px`,
					height : `${ this.props.height }px`
				}}>
				<div className="text"
					style={{ 
						width  : `${ this.props.width }px`,
						height : `${ this.props.height }px`,
						lineHeight: `${ this.props.height }px` 
					}}>
					NOW LOADING
				</div>
			</div>
		)	
	}
}
