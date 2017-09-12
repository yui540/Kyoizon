import React from 'react'

// components
import SnsBox       from './sns-box.jsx'
import SpMainVisual from './sp-main-visual.jsx'
import OverView     from '../containers/over-view'
import MenuView     from '../containers/menu-view'

export default class SP extends React.Component {
  constructor(props) {
    super(props)
  }

  /** 
   * 描画
   */
  render() {
    return (
      <div id="application"
        style={{
          width: `${ this.props.width }px`,
          height: `${ this.props.height }px`
        }}>
        <SnsBox />
        <SpMainVisual
          width={ this.props.width }
          height={ this.props.height }
        />
        <OverView />
        <MenuView />
      </div>
    )
  }
}
