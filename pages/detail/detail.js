// pages/detail/detail.js
Page({
  data: {
    moment: {
      backhome: 0,
      id: 0,
      userName: 'Sikorsky',
      timeStamp: '2天前',
      liked: true,
      avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
      content: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。',
      imgs: ['http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqth891jnj21e612sk3o.jpg',
        'http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqu5ftspyj20u01hc778.jpg',
        'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqsf5calk7j20u06mbkjm.jpg',
        'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqskcpvvq2j20u01hcdnp.jpg'
      ]
    },
    comments: [{
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        id: 0,
        content: '国家需要这样的人，也需要这样的电影',
        other: '',
        liked: true,
        likes: 45,
        selected: false,
        time: '2018-07-05 12:34:45'
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        id: 1,
        content: '国家需要这样的人，也需要这样的电影',
        other: '程勇，陆勇是一个人吗',
        othername: '风逝',
        liked: true,
        likes: 12,
        selected: false,
        time: '2018-07-05 12:34:45'
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        id: 2,
        content: '国家需要这样的人，也需要这样的电影',
        other: '',
        liked: false,
        likes: 8,
        selected: false,
        time: '2018-07-05 12:34:45'
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        id: 3,
        content: '国家需要这样的人，也需要这样的电影',
        other: '程勇，陆勇是一个人吗?哈哈哈哈哈哈哈哈哈',
        othername:'哈哈哈',
        liked: false,
        likes: 0,
        selected: false,
        time: '2018-07-05 12:34:45'
      },
    ],
  },

  onLoad(options) {
    console.log(options);
    this.setData({
      backhome: options.backhome
    })
  },

  onReady: function() {
    this.toaster = this.selectComponent("#toaster");
  },

  handleLikeComment(e) {
    let comments = this.data.comments;
    let liked = comments[e.currentTarget.id].liked;
    if (liked) {
      comments[e.currentTarget.id].liked = false;
      comments[e.currentTarget.id].likes -= 1;
    } else {
      comments[e.currentTarget.id].liked = true;
      comments[e.currentTarget.id].likes += 1;
    }
    this.setData({
      comments: comments
    });
  },

  previewImage(e) {
    const urls = this.data.moment.imgs;
    let index = urls.indexOf(e.target.id);
    wx.previewImage({
      current: urls[index],
      urls: urls,
    })
  },

  addToList() {
    wx.showModal({
      content: '确定关注 ' + this.data.moment.userName + ' ' + '吗？',
      success: this.onFollowSuccess.bind(this)
    })
  },

  onFollowSuccess(res) {
    if (res.confirm) {
      this.toaster.showToast({
        msg: '关注成功！'
      })
    }
  },

  onTapActionSheet(res) {
    let msg = '';
    switch (res.tapIndex) {
      case 0:
        msg = '回复成功！';
        break;
      case 1:
        msg = '举报成功！'
        break;
      case 2:
        msg = '屏蔽成功！'
        break;
    }
    this.toaster.showToast({
      msg: msg
    })
  },

  showCommentSheet(e) {
    const list = ['回复', '举报'];
    let comments = this.data.comments;
    comments[e.currentTarget.id].selected = true;
    this.setData({
      comments: comments
    });
    const that = this;
    wx.showActionSheet({
      itemList: list,
      success: this.onTapActionSheet.bind(this),
      complete: function() {
        let comments = that.data.comments;
        comments[e.currentTarget.id].selected = false;
        that.setData({
          comments: comments
        });
      }
    })
  },

  goToGuest(){
    this.toaster.showToast({
      msg:"哈哈哈哈哈"
    })
  },

  backhome() {
    wx.switchTab({
      url: '../index/index',
    })
  }
})