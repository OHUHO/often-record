// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:{},
    id:-1,
    isCollection: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var article = options.article
    console.log(JSON.parse(article))
    this.setData({
      article: JSON.parse(article)
    })
  },

  // 复制文章地址
  copyUrl(){
    wx.setClipboardData({
      data: this.data.article.nickname,
      success (res) {
        wx.hideToast()
        wx.getClipboardData({
          success (res) {
            console.log(res.data) // data
            wx.showToast({
              icon: 'none',
              title: '成功复制文章地址~',
            })
          }
        })
      }
    })
  },

  // 收藏
  handleCollection(){
    this.setData({
      isCollection: !this.data.isCollection
    })
  },

  // 分享
  share(){
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
  })