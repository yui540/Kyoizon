import React from 'react'
import json  from '../config/activity.json'

// components
import Title        from './title.jsx'
import ActivityList from './activity-li.jsx'

export default class Activity extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="activity page-li"
				style={{
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="活動記録"
					sub_title="Activity"
				/>
        {json.map((data, key) => {
          return (
            <ActivityList
              key={ key }
              url={ data.url }
              title={ data.title }
              thumb={ data.thumb }
              datetime={ data.datetime }
            />
          )
        })}
			</div>
		)
	}
}
