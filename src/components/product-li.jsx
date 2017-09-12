import React from 'react'

export default class ProductList extends React.Component {
  constructor(props) {
    super(props)
  }

  /**
   * 描画
   */
  render() {
    let tags = this.getTags(this.props.tags)

    return (
      <a href={ this.props.url } target="_blank" className="product-li">
        <img src={ this.props.thumb} alt="サムネイル" />
        <h3 className="title">{ this.props.title }</h3>
        <p className="catchcopy">{ this.props.catchcopy }</p>
        <p className="description" dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
        { tags }
        <p className="datetime">{ this.props.datetime }</p>
      </a>
    )
  }

  /**
   * タグの要素を取得
   * @param  tags : タグリスト
   * @return tags
   */
  getTags(tags) {
    return tags.map((tag, key) => {
      return (
        <span key={ key }>{ tag }</span>
      )
    })
  }
}
