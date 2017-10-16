import React from 'react'

export default class ProductBox extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 描画
   */
  render() {
    return (
      <div className="product-box">
      {this.props.json.map((product, key) => {
        return (
          <a className="product-li" 
            href={ product.link } 
            key={ key } 
            target="_blank">
            <div className="thumb"> 
              <div style={{ backgroundImage: `url(${ product.thumb })` }}></div>
            </div>
            <div className="tags">
            {product.tags.map((tag, key) => {
              return <div className="tag" key={ key }>{ tag }</div>
            })}
            </div>
            <h3 className="name">{ product.name }</h3>
            <p className="description">{ product.description }</p>
            <span className="date">{ product.date }</span>
          </a>
        )
      })}
      </div>
    )
  }
}
