import React    from 'react'

// compoents
import Nav from './nav.jsx'

export default class NavBox extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const list = ['profile', 'activity', 'product', 'schedule']
		return (
			<div className="nav-box"
				style={{
					width: `${ this.props.width }px`,
					height: `${ this.props.height }px`
				}}>
				{
					this.props.nav.map((nav, key) => {
						return (
							<Nav key={ key }
								id={ `nav-${ key }` }
								title={ list[key] }
								x={ nav[0] - 100 }
								y={ nav[1] - 100 }
								size={ 200 }
								navigatePage={ this.navigatePage.bind(this) }
							/>
						)
					})
				}
			</div>
		)
	}

	navigatePage(title) {
		this.props.navigatePage(title)
	}
}
