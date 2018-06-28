#### React单向数据流框架Flux的学习

（参考程墨的书的代码）

Flux是比较早期的单向数据流框架，主要产生的原因是因为MVC框架中，View绕过Controller去直接修改的Model是不加限制的，这样的话很容易将代码弄乱。

所谓单项数据流就是说，View只能从Model中获取数据，不能改变，如果要改变只能通过产生Action，将Action分发给Model层后，由model层根据时间类型自己改变，改变好了之后再通过某种手段告知view层。

这个过程中涉及的几个概念就是：

1. Action:事件对象

2. Dispatcher:作用是分发事件，注册事件处理逻辑

3. Store:数据控制对象

详细点的流程描述：

1. View层中，比如点一个按钮想改变数据，那么按钮的onClick方法中需要派发ACTION, 比如ADD;

2. 这个Action其实是被dispatcher分发的，分发给谁呢，dispatcher自己，dispatcher自己注册了一个自己收到Action 后的函数，在这个函数里面，根据事件类型，修改了store的值，同时借助store广播了一些事件；

3. store其实是扩展自eventEmitter的，所以有发送事件，监听事件并回调等功能。

4. 所以，view层中就某个store，可以在componentDidMount中给store注册监听事件和回调方法；

5. 那么当store接收到action后，传入的函数将会被回调，假设在这个函数中先得到store中最新的数据，再将数据setState了，这不就更新view了~~
