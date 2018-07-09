Page({
  data: {
    files: [],
    imgNum: 0,
    location: '',
    access: ['公开', '仅自己可见'],
    accessibility: ''
  },

  onReady() {
    this.toaster = this.selectComponent("#toaster");
  },

  chooseImage: function(e) {
    var that = this;
    let count = 9 - that.data.files.length;
    wx.chooseImage({
      count: count,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let files = that.data.files.concat(res.tempFilePaths);
        that.setData({
          files: files,
          imgNum: files.length
        });
      }
    })
  },

  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  deleteImg(e) {
    const curFiles = this.data.files;
    console.log(curFiles);
    console.log(curFiles.indexOf(e.target.id));
    let index = curFiles.indexOf(e.target.id);
    curFiles.splice(index, 1);
    console.log(curFiles);
    this.setData({
      files: curFiles,
      imgNum: curFiles.length
    })
  },

  publish() {
    this.toaster.showToast({
      msg: '发布成功！'
    })
  },

  chooseLocation() {
    let that = this;
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          location: res.name
        })
        console.log(that.data)
      },
    })
  },

  handleAccess(res) {
    let access=this.data.access;
    this.setData({
      accessibility: access[res.detail.value]
    });
  }
});