import React from 'react';
import memories from '../config/memories';

export default class Memories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="memories">
      {memories.map((li, key) => {
        return (
          <a href={ li.link } target="_blank" className="memories-li" key={ key }>
            <img src={ li.thumb } alt={ li.title } />
            <h3>{ li.title }</h3>
            <small>{ li.date }</small>
          </a>
        );
      })}
      </div>
    );
  }
}
