const app = getApp();

Page({
  data: {
    avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
    range: 30
  },

  onShow() {
    this.setData({
      range: app.globalData.range
    })
  },

  previewAvatar() {
    wx.previewImage({
      urls: [this.data.avatar],
    })
  },

  editUserInfo() {
    wx.navigateTo({
      url: '../userinfo/userinfo',
    })
  },

  goToGuest(e) {
    wx.navigateTo({
      url: '../guest/guest?id=' + e.currentTarget.id,
    })
  }
})