
<template>
  <view class="fui-wrap">
    TOKEN :{{ TOKEN }}
    <fui-button
      text="登录"
      bold
      @click="$link('/pages/my-sub/login')"
    ></fui-button>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  onShow() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>