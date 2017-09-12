import React from 'react'
import json  from '../config/schedule.json'

// components
import Title from './title.jsx'

export default class Schedule extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="schedule page-li"
				style={{
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="予定表"
					sub_title="Schedule"
				/>
        <div className="schedule-box">
          {json.map((data, key) => {
            return (
              <div className="schedule-li" key={ key }>
                <div className="datetime">{ data.datetime }</div>
                <a href={ data.url } target="_blank" className="title">
                  { data.title }
                </a>
              </div>
            )
          })}
        </div>
			</div>
		)
	}
}
