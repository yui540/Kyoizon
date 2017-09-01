import React from 'react'

export default class Logo extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="logo"
				style={{
					backgroundImage: 'url(./images/title-bar/logo.png)'
				}}>
			</div>
		)
	}
}
