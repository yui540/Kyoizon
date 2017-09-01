import React from 'react'

// components
import Sns from './sns.jsx'

export default class SnsBox extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
		const sns = [
			{ 
				title : 'GitHub',
				url   : 'https://github.com/yuki540net' ,
				img   : './images/contact/github.png'
			},
			{
				title : 'Twitter',
 				url   : 'https://twitter.com/eriri_jp?lang=ja',
				img   : './images/contact/twitter.png'
			},
			{
				title : 'Qiita',
				url   : 'http://qiita.com/yuki540',
				img   : './images/contact/qiita.png'
			}
		]

		return (
			<div className="sns-box">
			{ 
				sns.map((li, key) => {
					return (
						<Sns key={ key }
							url={ li.url }
							img={ li.img }
						/>
					)
				})
			}
			</div>
		)
	}
}
