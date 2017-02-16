## 简介
图片查看组件，用react构建，在线demo：[vv13.cn/picture-view](https://vv13.cn/picture-view)

## 如何安装
npm install --save picture-view

## 使用示例
```
import React, {Component} from 'react';
import './App.css';
import PictureView from 'picture-view';
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

        <PictureView
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

```

## 配置项

<table>
<tr>
  <th>参数名</th>
  <th>描述</th>
  <th>类型</th>
  <th>默认值</th>
  <th>必填</th>
</tr>
<tr>
  <td>picView</td>
  <td>是否全屏显示图片</td>
  <td>bool</td>
  <td></td>
  <td>是</td>
</tr>
<tr>
  <td>picIndex</td>
  <td>显示的图片索引</td>
  <td>number</td>
  <td></td>
  <td>是</td>
</tr>
<tr>
  <td>toggleView</td>
  <td>改变picView的回调函数</td>
  <td>func</td>
  <td></td>
  <td>是</td>
</tr>
<tr>
  <td>pictures</td>
  <td>图片地址数组</td>
  <td>array</td>
  <td></td>
  <td>是</td>
</tr>
<tr>
  <td>isSwipe</td>
  <td>是否可拖动图片</td>
  <td>bool</td>
  <td>false</td>
  <td>否</td>
</tr>
<tr>
  <td>hasArrow</td>
  <td>是否显示箭头</td>
  <td>bool</td>
  <td>false</td>
  <td>否</td>
</tr>
<tr>
  <td>hasDot</td>
  <td>是否显示点</td>
  <td>bool</td>
  <td>false</td>
  <td>否</td>
</tr>
</table>
