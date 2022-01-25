(function() {
	// 这句必须，引入httpVueLoader的；
	Vue.use(httpVueLoader);
	var vue = new Vue({
		el: '#app',
		data() {
			return {

			}
		},
		// components里面，引入组件
		// 组件必须与html文件在同一目录下，不然下边的写法，会引入失败；
		components: {
			'my-component': 'url:my-component.vue?v=' + (new Date().getTime())
		},
	});
})();
