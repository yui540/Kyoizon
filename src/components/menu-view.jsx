import React from 'react'

// components
import Nav from './nav.jsx'

export default class MenuView extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 描画
   */
  render() {
		const list = ['profile', 'activity', 'product', 'schedule']
    return (
      <div className="menu-view"
        data-mode={ this.props.mode }
        style={{
          width: `${ this.props.width }px`,
          height: `${ this.props.height }px`
        }}>
        <div className="box">
          <div className="close-btn" onClick={ this.props.closeMenu }></div>
          {list.map((li, key) => {
            return (
							<Nav key={ key }
								id={ `nav-${ key }` }
								title={ li }
								size={ 150 }
                navigatePage={ this.props.navigatePage.bind(this) }
							/>
						)
          })}
          <div className="close-btn" onClick={ this.props.closeMenu }></div>
        </div>
      </div>
    )
  }
}
