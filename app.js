App({
  globalData: {
    range: 30,
  },
  onLaunch: function() {
    try {
      const res = wx.getSystemInfoSync();
      this.globalData.windowWidth = res.windowWidth;
      this.globalData.windowHeight = res.windowHeight;
      this.globalData.range = wx.getStorageSync('range') ? wx.getStorageSync('range') : 30;
    } catch (e) {
    }
  },
})