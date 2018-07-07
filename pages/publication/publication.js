const app = getApp();
Page({
  data: {
    longtitude: "",
    latitude: "",
    circles: [{
      latitude: '40.007153',
      longitude: '116.491081',
      color: '#FF0000DD',
      fillColor: '#7cb5ec88',
      radius: 40000,
    }],
    range: '',
    clickable: true
  },

  onLoad(ops) {
    let circles = this.data.circles;
    circles[0].radius = ops.range * 1000;
    this.setData({
      circles: circles,
      range: ops.range
    });
  },

  onReady() {
    this.mapCtx = wx.createMapContext('map');
  },

  onShow() {
    this.getLocation();
  },

  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocationSuccess.bind(this)
    })
  },

  handleGetLocationSuccess(res) {
    let circles = this.data.circles;
    circles[0].latitude = res.latitude;
    circles[0].longitude = res.longitude;
    this.setData({
      latitude: res.latitude,
      longitude: res.longitude,
      circles: circles
    })
  },

  handleSliderChanging(res) {
    let circles = this.data.circles;
    circles[0].radius = res.detail.value * 1000;
    this.setData({
      circles: circles,
      range: res.detail.value
    })
  },

  handleSliderChange(res) {
    let circles = this.data.circles;
    circles[0].radius = res.detail.value * 1000;
    this.setData({
      circles: circles,
      range: res.detail.value
    })
  },

  confirm() {
    app.globalData.range = this.data.range;
    try {
      wx.setStorageSync('range', app.globalData.range);
    } catch (e) {
    }
    const msg = '发布范围' + app.globalData.range + 'km';
    wx.showToast({
      title: msg,
    })
  }
})