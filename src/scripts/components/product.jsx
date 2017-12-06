import React from 'react';
import product from '../config/product';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product">
        <section className="product-app">
          <h2><span className="fa fa-desktop"></span>アプリ・サービス</h2>
          <div>
          {product.app.map((li, key) => {
            return (
              <a href={ li.link } target="_blank" className="product-li" key={ key }>
                <img src={ li.thumb } alt="サムネ" />
                <h3>{ li.name }</h3>
                <p>{ li.description }</p>
                <small>{ li.date }</small>
              </a>
            )
          })}
          </div>
          <h2><span className="fa fa-file-code-o"></span>ライブラリ</h2>
          <div>
          {product.lib.map((li, key) => {
            return (
              <a href={ li.link } target="_blank" className="product-li" key={ key }>
                <img src={ li.thumb } alt="サムネ" />
                <h3>{ li.name }</h3>
                <p>{ li.description }</p>
                <small>{ li.date }</small>
              </a>
            )
          })}
          </div>
          <h2><span className="fa fa-file-code-o"></span>デザイン</h2>
          <div>
          {product.design.map((li, key) => {
            return (
              <a href={ li.link } target="_blank" className="product-li" key={ key }>
                <img src={ li.thumb } alt="サムネ" />
                <h3>{ li.name }</h3>
                <p>{ li.description }</p>
                <small>{ li.date }</small>
              </a>
            )
          })}
          </div>
          <h2><span className="fa fa-film"></span>動画</h2>
          <div>
          {product.movie.map((li, key) => {
            return (
              <a href={ li.link } target="_blank" className="product-li" key={ key }>
                <img src={ li.thumb } alt="サムネ" />
                <h3>{ li.name }</h3>
                <p>{ li.description }</p>
                <small>{ li.date }</small>
              </a>
            )
          })}
          </div>
        </section>
      </div>
    );
  }
}
