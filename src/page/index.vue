<template>
	<div>
		<h1 class="logo">
			cnodejs api test
		</h1>
		<ul class="list">
			<li v-for="item in lists" v-text="item.title"></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				lists: []
			}
		},
		created() {
			// 组件创建完成后执行
			this.get_data()
		},
		methods: {
			get_data: function(params) {
				var v = this;
				if (!params) params = {};
				v.$api.get('topics', params, function(r) {
					v.lists = r.data;
				})
			}
		}
	}
</script>