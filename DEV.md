# 组件开发说明

## 准备工作

```shell

# 克隆项目

git clone https://github.com/Yanzengyong/cetc-admin-component.git

# 安装依赖

yarn

```

## 开发

我们将本地开发分成两个部分（推荐开启两个 tabs)

首先, 运行 rollup 可以监听你的 src/ 模块, 当你有做出任何变更的时候会自动编译到 dist/ 中

```shell
yarn start
```

第二步就是运行 create-react-app 创建的 example/ 文件，它使用了您开发的模块的最新版本

```shell
cd example
yarn start
```
此时，若你改变 src/ 的任何内容, example实时地加载本地开发的服务器, 您可以借此来实时迭代开发您的组件

### 本地组件测试

```jsx
// example/src/App.js

import React from 'react'
import { Button } from 'cetc-admin-component'
import 'cetc-admin-component/dist/index.css'
import '@alifd/next/dist/next.css'

class App extends React.Component {
  render () {
  	return (
      <Button>我是一个按钮</Button>
  	)
  }
}

export default App
```

### 发布到npm中

```shell
# 此时应该在最层执行命令，即cetc-admin-component下
npm publish
```
您会发现此命令创建了 commonjs 和 es 版本的模块，然后把您的模块发布到 npm。

请务必要确保您将任何同等依赖（peer dependencies）的 npm 模块正确地加入到 package.json 中的 peerDependencies里。这样一来 rollup 将它们识别为同等依赖，而不会将它们打包到您的模块中。

### 文档页面部署

```shell
npm run deploy
```
这行命令会自动为你打包example中编写好的组件文档并发布到服务器中

访问地址：[http://www.yanzengyong.site/cetc-admin-component/](http://www.yanzengyong.site/cetc-admin-component/)

## 组件文档的开发

组件文档编写涉及的文件有：example/src/components、example/src/docs

* example/src/components
  * 创建一个文件夹来实现组件文档的生成，首字母需大写
  * 文件夹下需要创建index.js来编写组件文档的props和method
  * 文件夹下需要创建Readme.md来编写组件的预览及更多组件信息

  **如果我们没有创建Readme，配置中也自动给您生成了默认组件，所以Readme文件不是必须的。但是需要注意的是如果我们创建了Readme文件，那么一定要加入组件的使用，否则将不会有组件预览**

  **如果我们不想要组件预览效果，那文档的编辑成本将大大降低，在index.js中我们无需在组件的render函数中写正确是组件代码，直接return null即可。但为了能够正常显示props和method，我们依旧要把组件的defaultProps和propsType写上**

* example/src/docs
  * styleguide.config.js中配置的文档
