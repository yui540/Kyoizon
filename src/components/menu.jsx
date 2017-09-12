import React from 'react'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 描画
   */
  render() {
    return (
      <div className="menu"
        style={{
          width: `${ this.props.size }px`,
          height: `${ this.props.size }px`,
          top: `${ this.props.y }px`,
          left: `${ this.props.x }px`
        }}>
        <div className="second-hand-1"></div>
        <div className="second-hand-2"></div>
        <div className="second-hand-3"></div>
        <div className="overray"></div>
        <div className="menu-btn">
          <div className="box" data-mode={ this.props.mode } onClick={ this.clickBtn.bind(this) }>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    )
  }

  /**
   * メニューをクリックした時
   */
  clickBtn() {
    if(this.props.mode === 'open')
      this.props.closeMenu()
    else
      this.props.openMenu()
  }
}
