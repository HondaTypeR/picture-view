import React, {Component, PropTypes} from 'react';
import Carousel from './Carousel';


class FullpageImage extends Component {
  static propTypes = {
    className: PropTypes.string,
    picView: PropTypes.bool,
    picIndex: PropTypes.number,
    pictures: PropTypes.array,
    toggleView: PropTypes.func,
    isSwipe: PropTypes.bool,
    hasDot: PropTypes.bool,
    hasArrow: PropTypes.bool,
  };

  static defaultProps = {};

  componentDidMount() {
    this.refs.carousel.jumpSlick(this.props.picIndex);
  }

  componentDidUpdate() {
    this.refs.carousel.jumpSlick(this.props.picIndex);
  }

  getShadowStyles() {
    return {
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      zIndex: '1000',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    };
  }

  getCenterStyles() {
    return {
      height: '50%',
      width: '100%',
      zIndex: '1001',
      margin: 'auto',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
    }
  }

  getCloseStyles() {
    return {
      position: 'fixed',
      right: '10px',
      top: '10px',
      zIndex: '1005',
      cursor: 'pointer',
      visibility: 'visible',
      width: '30px',
      height: '30px',
    }
  }

  render() {
    return (
      <div
        style={{
          display: this.props.picView ? 'block' : 'none'
        }}
      >
        <div style={this.getShadowStyles()}>
          <div style={this.getCenterStyles()}>
            <Carousel
              width="100%"
              height="100%"
              items={this.props.pictures}
              ref="carousel"
              isSwipe={this.props.isSwipe}
              hasDot={this.props.hasDot}
              hasArrow={this.props.hasArrow}
            />
          </div>
        </div>
        <div style={this.getCloseStyles()} onClick={this.props.toggleView.bind(this, false)}>
          <svg width="100%" height="100%">
            <g stroke="rgb(160,160,160)" strokeWidth="2">
              <line x1="5" y1="5" x2="25" y2="25"/>
              <line x1="5" y1="25" x2="25" y2="5"/>
            </g>
          </svg>
        </div>

      </div>
    );
  }
}

export default FullpageImage;
