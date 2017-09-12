import React from 'react'
import json  from '../config/profile.json'

// components
import Title from './title.jsx'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		return (
			<div className="profile page-li"
				style={{
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="私について"
					sub_title="Profile"
				/>
        <div className="profile-box">
          <section className="info">
            <div className="header" style={{ backgroundImage: `url(${ json.header })` }}></div>
            <div className="body">
              <div className="icon" style={{ backgroundImage: `url(${ json.icon })` }}></div>
              <h3 className="name">{ `${ json.name }` }</h3>
              <p className="age">{ `age: ${ json.age }` }</p>
              <p className="birthday">{ `birthday: ${ json.birthday }` }</p>
              <p className="location">{ `location: ${ json.location }` }</p>
              <p className="job">{ `job: ${ json.job }` }</p>
            </div>
          </section>
          <section className="description">
            <h4 className="about">About</h4>
            <p dangerouslySetInnerHTML={{ __html: json.description }}></p>
          </section>
        </div>
			</div>
		)
	}
}
