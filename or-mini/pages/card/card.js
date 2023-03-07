// pages/card/card.js
const app = getApp()
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
    var articleId = options.articleId
    console.log(articleId)
    
    this.getArticleCardByArticleId(articleId)
  },

  getArticleCardByArticleId(articleId){
    var that = this
    wx.request({
      url: app.serverUrl + "/findArticleByArticleId?articleId=" + articleId,
      method:'GET',
      success(res){
        if(res){
          that.setData({
            article: res.data.data
          })
        }
      }
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