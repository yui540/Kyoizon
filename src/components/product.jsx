import React from 'react'

// components
import Title from './title.jsx'

export default class Product extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="product page-li"
				style={{
					width: '860px',
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="作品一覧"
					sub_title="Product"
				/>
			</div>
		)
	}
}
