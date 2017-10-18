import React from 'react'

export default class Activity extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 描画
   */
  render() {
    return (
      <div className="activity-box">
      {this.props.json.map((li, key) => {
        let state = "fa fa-check"
        if(!li.state) state = "fa fa-ban"
        state = `state ${ state }`

        return (
          <div key={ key }>
            <div className="line"></div>
            <section className="activity-li">
              <div className={ state } data-state={ li.state }></div>
              <h3 className="title">{ li.title }</h3>
              <div className="date">{ li.date }</div>
            </section>
            <div className="line"></div>
          </div>
        )
      })}
      </div>
    )
  }
}
