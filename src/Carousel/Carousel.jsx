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
    swipe: PropTypes.bool,
    dots: PropTypes.dots,
  };

  static defaultProps = {
    dots: false,
    swipe: false,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      playIndex: 0,
      dragging: false,
      touchObject: {},
    };
    this.turnSlick = this.turnSlick.bind(this);
    this.swipeStart = this.swipeStart.bind(this);
    this.swipeEnd = this.swipeEnd.bind(this);
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

  getPosX(e) {
    return (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
  }

  swipeStart(e) {
    if ((this.props.swipe === false) || ('ontouchend' in document && this.props.swipe === false)) {
      return;
    }
    const posX = this.getPosX(e);

    this.setState({
      dragging: true,
      touchObject: {
        startX: posX,
      }
    });
  }

  swipeEnd(e) {
    const startX = this.state.touchObject.startX;
    const endX = this.getPosX(e);
    const swipeLength = Math.round(Math.sqrt(Math.pow(endX - startX, 2)));
    if (!this.state.dragging || swipeLength < 200) {
      e.preventDefault();
      return;
    }
    const direction = endX - startX > 0 ? 'left' : 'right';
    console.log(swipeLength, direction);
    switch(direction) {
      case 'left':
        this.turnSlick(1);
        break;
      case 'right':
        this.turnSlick(-1);
        break;
      default:
        return;
    }

    this.setState({
      dragging: false,
      touchObject: {}
    });
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
        onMouseDown={this.swipeStart}
        onMouseUp={this.swipeEnd}
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
