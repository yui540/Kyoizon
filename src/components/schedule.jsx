import React from 'react'

// components
import Title from './title.jsx'

export default class Schedule extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="schedule page-li"
				style={{
					width: '860px',
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="予定表"
					sub_title="Schedule"
				/>
			</div>
		)
	}
}
