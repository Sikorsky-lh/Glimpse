// pages/userpage/userpage.js
Page({

  data: {
    avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
    moments: [{
        id: 0,
        userName: 'Sikorsky',
        timeStamp: '2天前',
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        content: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。',
        imgs: ['http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqth891jnj21e612sk3o.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqu5ftspyj20u01hc778.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqsf5calk7j20u06mbkjm.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqskcpvvq2j20u01hcdnp.jpg'
        ],
        likes: 0,
        comments: 3,
        liked: false
      },
      {
        id: 1,
        userName: 'Sikorsky',
        timeStamp: '2天前',
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        content: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。',
        imgs: ['http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqth891jnj21e612sk3o.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqu5ftspyj20u01hc778.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqsf5calk7j20u06mbkjm.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqskcpvvq2j20u01hcdnp.jpg'
        ],
        likes: 2,
        comments: 3,
        liked: false
      },
      {
        id: 2,
        userName: 'Sikorsky',
        timeStamp: '2天前',
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        content: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。',
        imgs: ['http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqth891jnj21e612sk3o.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqu5ftspyj20u01hc778.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqskcpvvq2j20u01hcdnp.jpg'
        ],
        likes: 2,
        comments: 3,
        liked: false
      },
      {
        id: 3,
        userName: 'Sikorsky',
        timeStamp: '2天前',
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        content: 'WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。',
        imgs: ['http://ww1.sinaimg.cn/large/ec8fa7e5gy1flqth891jnj21e612sk3o.jpg',
          'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fqskcpvvq2j20u01hcdnp.jpg'
        ],
        likes: 78,
        comments: 12,
        liked: false
      },

    ],
  },

  onReady() {
    this.toaster = this.selectComponent('#toaster');
  },

  previewImage(e) {
    const urls = this.data.moments[e.currentTarget.id].imgs;
    let index = urls.indexOf(e.target.id);
    wx.previewImage({
      current: urls[index],
      urls: urls,
    })
  },

  handleLike(e) {
    let moment = this.data.moments[e.currentTarget.id];
    if (moment.liked) {
      moment.likes -= 1;
      moment.liked = false;
    } else {
      moment.likes += 1;
      moment.liked = true;
    }
    this.data.moments[e.currentTarget.id] = moment;
    this.setData({
      moments: this.data.moments
    });
  },

  showActionSheet() {
    const list = ['关注', '举报', '屏蔽此人消息'];
    wx.showActionSheet({
      itemList: list,
      success: this.onTapActionSheet.bind(this)
    })
  },

  onTapActionSheet(res) {
    let msg = '';
    switch (res.tapIndex) {
      case 0:
        msg = '关注成功！';
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
})