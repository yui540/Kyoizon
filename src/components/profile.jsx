import React from 'react'

// components
import Title from './title.jsx'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="profile page-li"
				style={{
					width: '860px',
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="私について"
					sub_title="Profile"
				/>
			</div>
		)
	}
}
