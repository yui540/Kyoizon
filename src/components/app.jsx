import React from 'react'

// compoents
import TitleBar   from './title-bar.jsx'
import ContentBox from './content-box.jsx'
import OverView   from '../containers/over-view'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div id="application" style={{ 
				width: `${ this.props.width }px`,
				height: `${ this.props.height }px`
			}}>
				<TitleBar 
					width={ this.props.width }
					height={ this.props.height }
				/>
				<ContentBox 
					width={ this.props.width }
					height={ this.props.height }
				/>
				<OverView />
			</div>
		)
	}
}
