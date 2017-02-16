import React, {Component} from 'react';
import './App.css';
import FullpageImage from '../../../src';
import p1 from './imgs/1.jpg';
import p2 from './imgs/2.jpg';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      picView: false,
      picIndex: 0,
      pictures: [p1, p2],
    };
  }

  toggleView(status) {
    this.setState({
      picView: status,
    });
  }

  toggleIndex(index) {
    this.setState({
      picView: true,
      picIndex: index,
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.pictures.map((pic, index) => (
            <img alt={`img-${index}`} src={pic} width="400" height="400" key={`img-${index}`} onClick={() => this.toggleIndex(index)}/>
          ))
        }

        <FullpageImage
          picView={this.state.picView}
          picIndex={this.state.picIndex}
          pictures={this.state.pictures}
          toggleView={() => this.toggleView()}
          isSwipe
          hasDot
          hasArrow
          />
      </div>
    );
  }
}

export default App;
