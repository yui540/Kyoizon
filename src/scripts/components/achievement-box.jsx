import React from 'react'

export default class AchievementBox extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 描画 
   */
  render() {
    return (
      <div className="achievement-box">
      {this.props.json.map((li, key) => {
        return (
          <a href={ li.link } 
            target="_blank"
            key={ key }
            className="achievement-li">
            <div className="thumb" 
              style={{ backgroundImage: `url(${ li.thumb })` }}>
            </div>
            <h3 className="title">{ li.title }</h3>
            <p className="date">{ li.date }</p>
          </a>
        )                             
      })}
      </div>
    )
  }
}
