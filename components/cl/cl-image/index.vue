<template>
	<image :src="imageSrc" :mode="mode" @error="error" @load="load" :class="className"
		:style="{width:width,height:height}"></image>
</template>

<script>
	export default {
		name: 'dhImage',
		props: {
			src: {
				type: String,
				default: ''
			},
			errorSrc: {
				type: String,
				default: '/static/images/icon_store_record.png'
			},
			mode: {
				type: String,
				default: 'aspectFill'
			},
			width: {
				type: String,
				default: '130rpx'
			},
			height: {
				type: String,
				default: '130rpx'
			},
			className: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				imageSrc: ''
			};
		},
		methods: {
			error(e) {
				this.imageSrc = this.errorSrc;
				this.$emit("error", e);
			},
			load(e) {
				this.$emit("load", e);
			}
		},
		created() {
			this.imageSrc = this.src;
		}
	}
</script>

<style>
</style>
