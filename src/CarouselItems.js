import React, {Component, PropTypes} from 'react';

class CarouselItem extends Component {
  static propTypes = {
    items: PropTypes.array,
    index: PropTypes.number,
    offsetLeft: PropTypes.number
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  // css
  getWrapStyles(count, index, offset) {
    return {
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      margin: '0',
      transition: offset !== 0
        ? 'left 0s'
        : 'left 1s',
      cursor: offset !== 0
        ? 'pointer'
        : 'default',
      left: (-100 * index + offset) + '%',
      width: count * 100 + '%'
    };
  }

  getItemStyles(count) {
    return {
      display: 'inline-block',
      height: '100%',
      width: `${ 100 / count}%`,
    };
  }

  getImgStyles() {
    return {
      display: 'block',
      height: '100%',
      width: 'auto',
      margin: 'auto',
    };
  }

  render() {
    const count = this.props.items.length;
    const {index, offsetLeft} = this.props;
    return (
      <ul style={this.getWrapStyles(count, index, offsetLeft)}>
        {this.props.items.map((item, index) => (
          <li key={`item-${index}`} style={this.getItemStyles(count)}>
            <img draggable="false" style={this.getImgStyles()} src={item} alt={`img-${index}`} />
          </li>
        ))}
      </ul>
    )
  }
}

export default CarouselItem;
