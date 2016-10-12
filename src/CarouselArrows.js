import React, {Component, PropTypes} from 'react';

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

  getArrowStyles(pos) {
    return {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      top: '50%',
      width: '40px',
      height: '60px',
      marginTop: '-20px',
      cursor: 'pointer',
      left: pos === 'left' ? '0' : 'none',
      right: pos === 'right' ? '0' : 'none',
    }
  }


  render() {
    return (
      <div
        style={this.props.styles}
        className='carousel-arrows-wrap'
      >
        <div style={this.getArrowStyles('left')} onClick={this.props.onClick.bind(this, -1)}>
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
        <div style={this.getArrowStyles('right')} onClick={this.props.onClick.bind(this, 1)}>
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
