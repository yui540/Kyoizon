import React from 'react'
import json  from '../config/product.json'

// components
import Title       from './title.jsx'
import ProductList from './product-li.jsx'

export default class Product extends React.Component {
	constructor(props) {
		super(props)
	}

	/**
	 * 描画
	 */
	render() {
    let products = this.getProducts(json)

		return (
			<div className="product page-li"
				style={{
					height: `${ this.props.height }px`
				}}>
				<Title 
					title="作品一覧"
					sub_title="Product"
				/>
        { products }
			</div>
		)
	}

  /**
   * 作品一覧の要素を取得
   * @param json : JSONデータ
   * @return products
   */
  getProducts(json) {
    return json.map((product, key) => {
      return (
        <ProductList
          key={ key }
          title={ product.title }
          url={ product.url }
          thumb={ product.thumb }
          tags={ product.tags }
          catchcopy={ product.catchcopy }
          description={ product.description }
          datetime={ product.datetime }
        />
      )
    })
  }
}
