Page({

  data: {
    count: 0,
    content: '',
  },

  handleInput(res) {
    console.log(res);
    this.setData({
      content: res.detail.value,
      count: res.detail.value.length
    });
  }
})