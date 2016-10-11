import './style.css';
import React, { Component, PropTypes } from 'react';

class CarouselItem extends Component {
  static propTypes = {
    items: PropTypes.array,
    index: PropTypes.number,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }


  render() {
    const count = this.props.items.length;
    const { index } = this.props;

    return (
      <ul
        style={{
          left: -100 * index + '%',
          width: count * 100 + '%',
        }}
        className="carousel-item-wrap"
      >
        {this.props.items.map((item, index) => (
          <li className="carousel-item" key={`item-${index}`} style={{
            width: `${100 / count}%`
          }}>
            <img draggable="false" src={item} alt={`img-${index}`} className="carousel-img" />
          </li>
        ))}
      </ul>
    )
  }
}

export default CarouselItem;
