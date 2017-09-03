import React from 'react'

// components
import Profile  from './profile.jsx'
import Product  from './product.jsx'
import Schedule from './schedule.jsx'
import Activity from './activity.jsx'

export default class Page extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		let page = this.routePage(this.props.mode)

		return (
			<div className="page"
				data-mode={ this.props.mode }
				style={{
					width: `${ this.props.width }px`,
					height: '0'
				}}>
				{ page }
				<div className="close-btn"
					onClick={ this.clickClose.bind(this) }>
				</div>
			</div>
		)
	}

	clickClose() {
		this.props.clickClose(`${ this.props.mode }-close`)
	}

	routePage(mode) {
		switch(mode) {
			case 'profile':
				return (
					<Profile 
						height={ this.props.height }
					/>	
				)
			case 'product':
				return (
					<Product
						height={ this.props.height }
					/>
				)
			case 'activity':
				return (
					<Activity 
						height={ this.props.height }
					/>
				)
			case 'schedule':
				return (
					<Schedule
						height={ this.props.height }
					/>
				)
			default:
				return <div></div>
		}
	}
}
