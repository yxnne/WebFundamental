import Vue from 'vue';
import Todolist from './components/Todolist'

new Vue({
	el: '#app',
	components: { Todolist:Todolist },
	template: '<Todolist/>'
});