<template>
	<view class="fui-wrap p-40">
		<view class="fui-form__box">
			<fui-input :padding="['28rpx', '0']" placeholder="请输入工号" bottomLeft="0" maxlength="20"
				v-model="account"></fui-input>
			<fui-input :password="password" :padding="['64rpx', '0', '28rpx']" placeholder="请输入密码" bottomLeft="0"
				v-model="pasw" maxlength="30">
				<fui-icon @click="change" :name="password ? 'invisible' : 'visible'" size="44"
					color="#CCCCCC"></fui-icon>
			</fui-input>
			<view class="m-t-40"><fui-button text="登录"  @click="login"></fui-button></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: true,
				account: 'GH001',
				pasw: '123456'
			};
		},
		onShow() {},
		methods: {
			change() {
				this.password = !this.password;
			},
			login() {
				if (!this.account) {
					this.$msg('请输入账号');
					return;
				}
				if (!this.pasw) {
					this.$msg('请输入密码');
					return;
				}
				this.$api.user
					.login({
						Username: this.account,
						Password: this.pasw,
						loading: true
					})
					.then(res => {
						this.setStore('TOKEN', res.Token || new Date()); //保存token
						this.setStore('userData', res || {}); //保存用户信息 userData
						this.$link('/pages/index/index', 1);
					})
			}
		}
	};
</script>
<style>
	page {
		background-color: #fff;
	}
</style>
<style>
	.fui-menu__box {
		/* #ifndef APP-NVUE */
		width: 100%;
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.fui-menu__item {
		font-size: 28rpx;
		line-height: 28rpx;
		font-weight: 500;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
		padding: 0 24rpx;
	}

	.fui-menu__item:active {
		opacity: 0.6;
	}

	.fui-menu__first {
		/* #ifdef APP-NVUE */
		border-right: 1rpx solid #d8d8d8;
		/* #endif */

		/* #ifndef APP-NVUE */
		border-right: 1rpx solid var(--fui-color-border, #d8d8d8);
		/* #endif */
	}

	.fui-forget__pwd {
		font-size: 28rpx;
		line-height: 28rpx;
		font-weight: 500;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
		position: absolute;
		top: 16rpx;
		right: 0;
	}
</style>