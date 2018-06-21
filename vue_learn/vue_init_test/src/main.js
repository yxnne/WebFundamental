// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

new Vue({
	el:'#app',
	// 数据
	data:{
		title:'Simple Demo in Vue: Todo List',
		showSubTitle:true,
		newtodo:'',
		subTitle:'A Very Simple Demo',
		todos:[{text:'Never Play Games',done:false}],
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
})
