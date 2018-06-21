<template>
	<div>
    	<p>{{title}}</p>
    	<!-- v-if判断组件显示与否 -->
    	<p v-if="showSubTitle">{{subTitle}}</p>
    	<Title :title="title" subTitle="subTitle"/><!--注意冒号和不冒号的区别，不给冒号就直接就是这个字符串，有冒号就是绑定这个变量的值-->
    	<br>
    	<!-- @keyup.enter绑定键盘事件“enter” 回调handleAdd方法 -->
		<input @keyup.enter="handleAdd" type="text" v-model="newtodo"/>
		<!-- @click绑定单击鼠标事件 回调handleAdd方法 -->
    	<button @click="handleAdd">add a new todo things</button>

    	<ul>
    		<!-- v-for 遍历元素 -->
    		<!-- :style的值是一个样式对象 -->
    		<li :key="todo.text" :style="{'text-decoration':todo.done?'line-through':''}" @click="toggle(index)" v-for="(todo, index) in todos">
    		{{index+1}} : {{todo.text}}
    		</li>
    	</ul>
    	<!-- 另一种样式的写法 -->
    	<!-- :class，done类名，后面的是显示与否的值 -->
    	<ul>
    		<li :key="todo.text" :class="{done:todo.done}" @click="toggle(index)" v-for="(todo, index) in todos">
    		{{index+1}} : {{todo.text}}
    		</li>
    	</ul>
		
		<!-- remians是一个计算属性 -->
    	<p>已经完成 ： {{remains}}/{{todos.length}}</p>
    	<button @click="clearFinish">clear what have finished</button>
    </div>

</template>

<script>
import Title from './Title';

export default{
	//使用组件的时候记得要这样
	// components:{ Title:Title },简写成
	components:{ Title },
	
	// 在vue文件中使用data，data必须是函数
	data(){
		return {
			title:'Simple Demo in Vue: Todo List',
			showSubTitle:false,
			newtodo:'',
			subTitle:'A Very Simple Demo',
			todos:[{text:'Never Play Games',done:false}],
		};
	},
	//计算属性
	computed:{
		remains:function(){
			return this.todos.filter(i=>i.done).length;
		}
	},
	// 方法集合
	methods:{
		// es6 before function
		handleAdd:function(){
			// this.title = "shit"
			this.todos.push({
				text:this.newtodo,
				done:false
			});
			this.newtodo = '';

		},
		// es6 function writing style
		clearFinish(){
			this.todos = this.todos.filter(i=> !i.done);
		},
		toggle:function(index){
			console.log(index);
			this.todos[index].done = !this.todos[index].done;
		},
	},
}
</script>

<style>
li.done{
    color: red;
}
</style>