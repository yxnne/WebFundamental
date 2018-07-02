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


