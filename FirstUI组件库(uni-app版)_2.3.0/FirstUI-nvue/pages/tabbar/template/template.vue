<template>
  <view class="fui-wrap">
    <view class="fui-content__box">
      <view class="fui-img__box">
        <image
          src="/static/images/common/img_coding_3x.png"
          class="fui-img"
          mode="widthFix"
        ></image>
      </view>
      <view class="fui-title">nvue组件示例</view>
      <view class="fui-sub__title">该页面内容非本示例提供！</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
page {
  background-color: #fff;
  font-weight: normal;
}

.fui-content__box {
  width: 100%;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.fui-img__box {
  width: 100%;
  padding: 0 87rpx;
  box-sizing: border-box;
}

.fui-img {
  width: 100%;
  height: 318rpx;
}

.fui-title {
  text-align: center;
  font-weight: 500;
  color: #333333;
  padding-top: 48rpx;
}

.fui-sub__title {
  text-align: center;
  font-size: 24rpx;
  font-weight: 400;
  color: #b2b2b2;
  padding-top: 8rpx;
}
</style>