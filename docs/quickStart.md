# 快速开始



## 安装 tinper-libraui
可使用 npm、cnpm、yarn 以及 ynpm 来安装组件库以及组件。

```
ynpm install --save tinper-libraui
```

## 项目中使用 tinper-libraui

为了方便用户单独处理样式和js文件，所以我们对js和css进行了单独的打包。

```js
import React,{ Component } from 'react';

//tinper-libraui 组件库js引用
import { Button, WhiteSpace, WingBlank } from 'tinper-libraui';

//tinper-libraui 组件库 css 引用
import 'tinper-libraui/dist/index.css';

//项目样式
import './index.less';

class Example extends Component{
  constructor(props) {
   super(props);
 }

  render(){
    return (
    <WingBlank>
      <Button>default</Button>
    </WingBlank>)
  }
}

export default Example；

```

