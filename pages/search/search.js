Page({
  data: {
    inputShowed: false,
    inputVal: "",
    histories: [],
    hots: [1, 2, 3, 4]
  },

  onLoad() {
    console.log('onload')
    let that = this;
    wx.getStorage({
      key: 'search-history',
      success: function(res) {
        that.setData({
          histories: res.data
        })
      },
    })
  },

  onReady: function() {
    this.toaster = this.selectComponent("#toaster");
  },

  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },

  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },

  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  handleSearch() {
    if (!(this.data.inputVal.trim().length > 0)) {
      this.toaster.showToast({
        msg: "搜索内容不能为空！"
      });
      return;
    }
    let histories = this.data.histories;
    histories.unshift(this.data.inputVal);
    let arr = [];
    histories = histories.filter((item, index) =>
      index <= 2
    );
    this.setData({
      histories: histories
    });
    wx.setStorage({
      key: 'search-history',
      data: this.data.histories,
    });
  },

  clearHistory() {
    this.setData({
      histories: []
    });
    wx.setStorage({
      key: 'search-history',
      data: [],
    });
  }
});