<template>
	<div class="hello" @click="respondsToTap">Hello {{count}}</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				count: 0
			}
		},
		methods: {
			respondsToTap() {
				this.count = this.count + 1
			}
		}
	}
</script>

<style>
	.hello {
		background-color: #ffe;
		line-height: 40px;
	}
</style>
