
<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
    //App2.6.5+ 仅iOS
    // #ifndef APP-PLUS || H5
    if (uni.canIUse("getUpdateManager")) {
      const updateManager = uni.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            this.fui.modal(
              "更新提示",
              "发现新版本，为了获得更好的体验，建议立即更新",
              (res) => {
                updateManager.applyUpdate();
              }
            );
          });
          updateManager.onUpdateFailed(() => {
            this.fui.modal(
              "更新失败",
              "新版本更新失败，请稍后再试或删除小程序重新搜索打开",
              (res) => {}
            );
          });
        }
      });
    }
    // #endif
  },
  onShow: function () {},
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "./style/fui-app.css";
@import "./style/common.scss";
@import "./style/fui-theme.css";
</style>