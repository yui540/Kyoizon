import React from 'react'

// components
import Bg        from './bg.jsx'
import Character from '../containers/character'
import Menu      from '../containers/menu'

export default class SpMainVisual extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 描画
   */
  render() {
    return (
      <article className="main-visual"
        style={{
          width: `${ this.props.width }px`,
          height: `${ this.props.height }px`
        }}>
        <Bg
          width={ this.props.width }
          height={ this.props.height }
          url="../images/main-visual/bg.jpg"
        />
        <Character url="../images/main-visual/satella.png" />
        <Menu />
      </article>
    )
  }
}
