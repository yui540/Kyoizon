import React from 'react'

export default class ActivityList extends React.Component {
  constructor(props) {
    super(props)
  }

  /** 
   * 描画
   */
  render() {
    return (
      <a href={ this.props.url } target="_black" className="activity-li" key={ this.props.num }>
        <img src={ this.props.thumb } alt="サムネ" />
        <div className="title">{ this.props.title }</div>
        <span className="datetime">{ this.props.datetime }</span>
      </a>
    )
  }
}
