import './style.css';
import React, {Component, PropTypes} from 'react';
import Carousel from '../Carousel';


class FullpageImage extends Component {
  static propTypes = {
    className: PropTypes.string,
    picView: PropTypes.bool,
    picIndex: PropTypes.number,
    pictures: PropTypes.array,
    toggleView: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    this.refs.carousel.jumpSlick(this.props.picIndex);
  }

  componentDidUpdate() {
    this.refs.carousel.jumpSlick(this.props.picIndex);
  }

  render() {
    return (
      <div
        style={{
          display: this.props.picView ? 'block' : 'none'
        }}
      >
        <div className="fimage-shadow">
          <div className="fimage-center">
            <Carousel
              width="100%"
              height="100%"
              arrow={true}
              items={this.props.pictures}
              ref="carousel"
            />
          </div>
        </div>
        <div className="fimage-close" onClick={this.props.toggleView.bind(this, false)}>
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
