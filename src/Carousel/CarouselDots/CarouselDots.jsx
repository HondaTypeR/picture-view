import './style.css';
import React, { Component, PropTypes } from 'react';

class CarouselDots extends Component {
  static propTypes = {
    index: PropTypes.number,
    count: PropTypes.number,
    clickFn: PropTypes.func,
  };

  static defaultProps = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  handleDotClick(i) {
    this.props.clickFn(i);
  }

  render() {
    let dotNodes = [];
    const { count, index } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={'carousel-dot' + (i === index ? ' carousel-dot-selected': '')}
          onClick={this.handleDotClick.bind(this, i)}
        >
        </span>
      )
    }

    return (
      <div className="carousel-dot-wrap">
        {dotNodes}
      </div>
    )
  }
}

export default CarouselDots;
