import React, {Component, PropTypes} from 'react';
import './style.css';

class CarouselArrows extends Component {
  static propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    onClick: PropTypes.func,
  };

  static defaultProps = {};

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }



  render() {
    return (
      <div
        style={this.props.styles}
        className='carousel-arrows-wrap'
      >
        <div className="carousel-arrow left" onClick={this.props.onClick.bind(this, -1)}>
          <svg width="100%" height="100%">
            <polyline
              points="30 10 10 30 30 50"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="4"
              strokeLinecap="butt"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="carousel-arrow right" onClick={this.props.onClick.bind(this, 1)}>
          <svg width="100%" height="100%">
            <polyline
              points="14 10 34 30 14 50"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="4"
              strokeLinecap="butt"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default CarouselArrows;
