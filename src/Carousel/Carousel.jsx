import './style.css';
import React, { Component, PropTypes } from 'react';
import CarouselArrows from './CarouselArrows';
import CarouselDots from './CarouselDots';
import CarouselItems from './CarouselItems';

class Carousel extends Component {
  static propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    items: PropTypes.array,
    width: PropTypes.string,
    height: PropTypes.string,
  };

  static defaultProps = {
    dots: false,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      playIndex: 0,
    };
    this.turnSlick = this.turnSlick.bind(this);
  }

  // 切换轮播图
  turnSlick(n) {
    let toN = this.state.playIndex + n;
    if (toN < 0) {
      toN += this.props.items.length;
    }
    if (toN >= this.props.items.length) {
      toN -= this.props.items.length;
    }
    this.setState({
      playIndex: toN,
    });
  }

  // 跳到某一轮播图
  jumpSlick(n) {
    if (n >= 0 && n <this.props.items.length) {
      this.setState({
        playIndex: n,
      });
    }
  }

  render() {
    const dotsNode = <CarouselDots
      index={this.state.playIndex}
      count={this.props.items.length}
      clickFn={this.jumpSlick.bind(this)}
    />;
    return (
      <div
        className="carousel"
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
      >
        <CarouselItems
          index={this.state.playIndex}
          items={this.props.items}
        />
        {this.props.dots ? dotsNode : null}
        <CarouselArrows onClick={this.turnSlick} />
      </div>
    );
  }
}

export default Carousel;
