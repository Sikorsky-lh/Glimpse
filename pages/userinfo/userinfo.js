Page({
  data: {
    date: "请选择生日",
    region: "请选择地区",
    avatar: '../../icons/mine.png',
    motto: "",
    count: 0
  },

  onReady() {
    this.toaster = this.selectComponent('#toaster');
  },

  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindRegionChange: function(e) {
    console.log(e);
    this.setData({
      region: e.detail.value[0] + " " + e.detail.value[1]
    })
  },

  handleNickname(e) {
    this.setData({
      nickname: e.detail.value
    })
  },

  handleSchool(e) {
    this.setData({
      school: e.detail.value
    })
  },

  chooseImg() {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      success: function(res) {
        let tempFilePaths = res.tempFilePaths;
        that.setData({
          avatar: tempFilePaths[0]
        });
      }
    })
  },

  handleMotto(e) {
    console.log(e)
    this.setData({
      motto: e.detail.value,
      count: e.detail.cursor
    });
  },

  confirm() {
    if (this.data.avatar == '../../icons/mine.png') {
      this.toaster.showToast({
        msg: ' 请选择头像！'
      });
      return;
    };

    if (!this.data.nickname) {
      this.toaster.showToast({
        msg: ' 请输入昵称！'
      });
      return;
    };

    if (!this.data.school) {
      this.toaster.showToast({
        msg: ' 请输入学校！'
      });
      return;
    };

    if (this.data.date == '请选择生日') {
      this.toaster.showToast({
        msg: ' 请选择生日！'
      });
      return;
    };

    if (this.data.region == '请选择地区') {
      this.toaster.showToast({
        msg: ' 请选择地区！'
      });
      return;
    };

    if (!this.data.motto) {
      this.toaster.showToast({
        msg: ' 请输入签名！'
      });
      return;
    };

    wx.showModal({
      title: '提示',
      content: '除头像和昵称外，其他信息一年只有一次修改机会，请慎重填写',
      cancelText: '确认提交',
      confirmText: '返回修改',
      success: function(res) {
        if (res.confirm) {} else if (res.cancel) {
          wx.showToast({
            title: '提交成功',
          });
        }
      }
    })
  }
})