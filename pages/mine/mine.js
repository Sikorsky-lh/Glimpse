const app = getApp();

Page({
  data: {
    logged: true,
    avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
    range: 30,
    follow: 0,
    fans: 0,
    visitor: 0,
    newVisitor: 10
  },

  onReady() {
    this.toaster = this.selectComponent("#toaster");
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
  },

  changeIdentity() {
    this.toaster.showToast({
      msg: '非Glimpse认证账号，无法使用此功能，详情查看“我的-常见问题”',
      duration: 3000
    })
  },

  handleLogin() {
    console.log('login');
  }
})