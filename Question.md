【问题汇总】

1.Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
全局安转的webpack导致的，npm install webpack 可解决


2.ERROR in Entry module not found: Error: Can't resolve 'babel-loader'
没有引入babel-core和babel，npm install - -save-dev babel-core babel可解决

3.Module build failed: Error: The node API for `babel` has been moved to `babel-core`.
不需要安装babel了，babel的API已经整合到babel-core了

4.ERROR in Entry module not found: Error: Can't resolve 'babel' in '/Users/caifanglin/mycode/my/simple-webpack-react-redux-router'
BREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.You need to specify 'babel-loader' instead of 'babel',
webpack.config.js中的loaders若使用了babel-loader，则不能省略「-loader」后缀。但目前使用的其他loader可省略。

5.Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `List`. See https://fb.me/react-warning-keys for more information.
react在遍历时，需要给children的key赋值，便于children的区分

6.Uncaught Error: Objects are not valid as a React child (found: object with keys {text}). If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons. Check the render method of `Btn`.
this.props没有text（reducer中的initState没有定义text属性）

7.BrowserRouter的子路径404问题
BroswerRouter是需要服务端配合的，服务端重定向到首页


8.HashRouter不能重复点击一个子路径问题