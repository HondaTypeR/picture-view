import React from 'react'
import {render} from 'react-dom'

import Component from './FullpageImage'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>my-component Demo</h1>
      <Component/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
