import React from 'react'

// components
import Title from './title.jsx'

export default class Activity extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="activity page-li"
				style={{
					width: '860px',
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="活動記録"
					sub_title="Activity"
				/>
			</div>
		)
	}
}
