# 说明

这里是为了学习体验下一种文件组织方式

## 按角色组织和按模块组织

所谓按角色组织的文件组织方式可能是这样的

* 在MVC架构下

--controller
  |--AController
  |--BController
--model
  |--user
  |-- ...
--view
  |--views

* react + redux todolist 的按角色组织

--reducers
  |--todoreducer.js
  |--filterreducer.js
--actions
  |--todoaction.js
  |--filteraction.js
--components
  |--todolist.js
  |--todoitem.js
  |--filter.js
--container
  |--todolistcontainer.js
  |--filtercontainer.js

* 按功能模块组织

--todolist
  |--index.js
  |--actions.js
  |--actiontype.js
  |--reducer.js
  |--view
      |--component
      |--container
--fliter
  |--index.js
  |--actions.js
  |--actiontype.js
  |--reducer.js
  |--view
      |--component
      |--container

这个思想就是划分功能模块，在模块中组织各个角色。
其中index.js就是负责将模块内的所有角色导入并导出的接口（当导入的是目录时，默认导入的就是目录下的index.js文件）。

## redux的一些中间件

关于react和redux常见的中间件和调试工具有：

* react-dev-tool 官方react调试工具，chorme插件安装，代码中啥都不用做

* redux-dev-tool redux插件，chrome插件安装，代码中需要判断调用 window.devToolsExtension函数

* redux-immutable-state-invariant npm本地安装，redux的中间件，帮助检查reducer是否是纯函数

```javascript

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as todoReducer } from './todolist';
import { reducer as filterReducer } from './filter';


// 中间件
const middlewares = [];

if(process.env.NODE_ENV !== 'production'){
  // 该中间件帮助检查reducer是不是一个纯函数
  // 这里为什么使用require引入而不是import？
  // 因为import只能出现在文件的顶部，不能出现在条件语句之中
  middlewares.push(require('redux-immutable-state-invariant').default());

}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),  // applyMiddleware的参数每一个都是一个redux中间件
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f // 在使用reduxDevtools
  // 如果浏览器中安装了reduxDevTool插件，那么window全局变量会有devToolsExtension函数，
  // 所以在这里判断下而已，如果没有插件，返回一个不作为函数
);

// 合并reducers，构建store
const reducers = combineReducers({
  todos: todoReducer, 
  filter: filterReducer
});

export default createStore(reducers, {}, storeEnhancers);

```
