// pages/guest/guest.js
Page({
  data: {
    guests: [{
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        username: 'Sikorsky',
        school: '南京大学',
        motto: '哈哈哈哈哈',
        age: 23,
        sex: true,
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        username: 'Sikorsky',
        school: '河海大学',
        motto: '……',
        age: 22,
        sex: false,
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fq9z1xqw4yj20hs0hsjsx.jpg',
        username: 'Sikorsky',
        school: '南京师范大学',
        motto: '“人生”。',
        age: 20,
        sex: false,
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        username: 'Sikorsky',
        school: '东南大学',
        motto: '“人生不是一场百米赛跑”。',
        age: 25,
        sex: true,
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        username: 'Sikorsky',
        school: '南京大学',
        motto: '“一场无穷无尽的马拉松”。',
        age: 21,
        sex: false,
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        username: 'Sikorsky',
        school: '河海大学',
        motto: '“人生不是一场百米赛跑szdfdfgadgf，而是一场无穷无尽的马拉松”。',
        age: 23,
        sex: true,
      },
      {
        avatar: 'http://ww1.sinaimg.cn/large/ec8fa7e5gy1fssaldn1mfj20hs0hs3zn.jpg',
        username: 'Sikorsky',
        school: '河海大学',
        motto: '“人生不是一场百米赛跑，而是一场无穷无尽的马拉松”。',
        age: 23,
        sex: false,
      }
    ],
  },

  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.id,
    })
  },

  clickAvatar(e) {
    const that = this;
    wx.previewImage({
      urls: [that.data.guests[e.target.id].avatar],
    })
  }
})