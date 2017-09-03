import React from 'react'

export default class Title extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="title">
				<div className="large">{ this.props.title[0] }</div>
				<div className="small">{ this.props.title.slice(1,) }</div>
				<div className="sub-title">{ this.props.sub_title }</div>
			</div>
		)
	}
}
