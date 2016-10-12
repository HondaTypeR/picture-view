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
      dotHover: false,
    };
  }

  handleDotClick(i) {
    this.props.clickFn(i);
  }
  // Event
  toggleDotHover() {
    this.setState({dotHover: !this.state.dotHover})
  }

  // css
  getWrapStyles() {
    return {
      zIndex: '99',
      textAlign: 'center',
      width: '100%',
      position: 'absolute',
      bottom: '0',
    }
  }

  getDotStyles(isSelected, isHovered) {
    return {
      display: 'inline-block',
      width: '6px',
      height: '6px',
      margin: '6px',
      cursor: 'pointer',
      borderRadius: '20px',
      backgroundColor: isSelected ? '#ccc' : 'none',
      border: isHovered ? '3px solid #868686' : '3px solid #ccc',
    };
  }

  render() {
    let dotNodes = [];
    const { count, index } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          style={this.getDotStyles(i === index, this.state.dotHover)}
          onClick={this.handleDotClick.bind(this, i)}
          onMouseEnter={this.toggleDotHover}
          onMouseLeave={this.toggleDotHover}
        >
        </span>
      )
    }

    return (
      <div style={this.getWrapStyles()}>
        {dotNodes}
      </div>
    )
  }
}

export default CarouselDots;
