// pages/notification/notification.js
Page({

  data: {
    notifications: [{
        nickname: 'Sikorsky',
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        time: '昨天 23:57',
        other: '',
        like: true,
        comment: ''
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        nickname: 'Sikorsky',
        time: '昨天 23:57',
        other: '哈哈哈哈哈',
        like: false,
        comment: '真挚的友谊？'
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        nickname: 'Sikorsky',
        time: '昨天 23:57',
        other: '哈哈哈哈哈',
        like: true,
        comment: ''
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        nickname: 'Sikorsky',
        time: '昨天 23:57',
        other: '哈哈哈哈哈',
        like: false,
        comment: '真挚的友谊？'
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        nickname: 'Sikorsky',
        time: '昨天 23:57',
        other: '',
        like: false,
        comment: '真挚的友谊？'
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        nickname: 'Sikorsky',
        time: '昨天 23:57',
        other: '',
        like: false,
        comment: '真挚的友谊？'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('load')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('ready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})