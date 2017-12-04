import React from 'react';
import news from '../config/news';

export default class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="news">
      {news.map((li, key) => {
        const state = li.state ? 'fa fa-check' : 'fa fa-ban';

        return (
          <section className="news-li" key={ key }>
            <div className={ state }></div>
            <div className="title">
              { li.title }
              <small>{ li.date }</small>
            </div>
          </section>
        );
      })}
      </div>
    );
  }
}
