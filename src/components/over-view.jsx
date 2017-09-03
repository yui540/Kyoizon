import React from 'react'

// components
import Story   from './story.jsx'
import Loading from './loading.jsx'
import Page    from '../containers/page'

export default class OverView extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div id="over-view" 
				data-mode={ this.props.story }
				style={{
					width  : `${ this.props.width }px`,
					height : `${ this.props.height }px`
				}}>
				<Story 
					mode={ this.props.story }
					char_x={ this.props.char_x }
					char_w={ this.props.char_w }
					char_h={ this.props.char_h }
					width={ this.props.width }
					height={ this.props.height }	
				/>
				<Page />
				<Loading
					mode={ this.props.loading }
					width={ this.props.width }
					height={ this.props.height }
				/>
			</div>
		)
	}
}
