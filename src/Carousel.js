import React, { Component, PropTypes } from 'react';
import CarouselArrows from './CarouselArrows';
import CarouselDots from './CarouselDots';
import CarouselItems from './CarouselItems';
import reactDom from 'react-dom';

class Carousel extends Component {
  static propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    items: PropTypes.array,
    width: PropTypes.string,
    height: PropTypes.string,
    isSwipe: PropTypes.bool,
    hasDot: PropTypes.bool,
    hasArrow: PropTypes.bool,
  };

  static defaultProps = {
    hasDot: false,
    hasArrow: true,
    isSwipe: false,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      playIndex: 0,
      dragging: false,
      touchObject: {},
      offsetLeft: 0,
    };
    this.turnSlick = this.turnSlick.bind(this);
    this.swipeStart = this.swipeStart.bind(this);
    this.swipeEnd = this.swipeEnd.bind(this);
    this.dragging = this.dragging.bind(this);
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
    if ((this.props.isSwipe === false) || ('ontouchend' in document && this.props.swipe === false)) {
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
    } else {
      const direction = endX - startX > 0 ? 'left' : 'right';
      switch(direction) {
        case 'left':
          this.turnSlick(1);
          break;
        case 'right':
          this.turnSlick(-1);
          break;
        default:
          break;
      }
    }
    this.setState({
      dragging: false,
      touchObject: {},
      offsetLeft: 0,
    });
  }

  dragging(e) {
    const curX = this.getPosX(e);
    const dragLength = curX - this.state.touchObject.startX;
    const carouselLen  = reactDom.findDOMNode(this.refs.carouselitem).offsetWidth;
    this.setState({
      offsetLeft: dragLength / carouselLen * 100,
    });
  }

  render() {
    const isSwipe = this.props.isSwipe;
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
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseDown={ isSwipe ? this.swipeStart : null}
        onMouseUp={ isSwipe ? this.swipeEnd : null}
        onMouseMove={isSwipe && this.state.dragging ? this.dragging : null}
        onMouseLeave={isSwipe && this.state.dragging ? this.swipeEnd: null}
      >
        <CarouselItems
          index={this.state.playIndex}
          items={this.props.items}
          offsetLeft={this.state.offsetLeft}
          ref="carouselitem"
        />
        {this.props.hasDot ? dotsNode : null}
        {this.props.hasArrow ? <CarouselArrows onClick={this.turnSlick} /> : null }
      </div>
    );
  }
}

export default Carousel;
