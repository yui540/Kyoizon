import React from 'react'

export default class Nav extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id={ this.props.id }
				onClick={ this.navigatePage.bind(this) }
				className="nav"
				style={{ 
					width: `${ this.props.size }px`,
					height: `${ this.props.size }px`,
					left: `${ this.props.x }px`,
					top: `${ this.props.y }px`
				}}>
				<div className="second-hand-1"></div>
				<div className="second-hand-2"></div>
				<div className="second-hand-3"></div>
				<div className="text"></div>
			</div>
		)
	}

	navigatePage(e) {
		this.props.navigatePage(this.props.title)
	}
}
