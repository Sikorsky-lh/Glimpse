// components/toaster/toaster.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    toastText: '',
    duration: 2000,
    isShowToast: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showToast(e) {
      const _this = this;
      this.setData({
        toastText: e.msg,
        duration: e.duration ? e.duration : 2000,
        isShowToast: true
      });
      setTimeout(function() {
        _this.setData({
          isShowToast: false
        });
      }, _this.data.duration);
    }
  }
})