// pages/card/card.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:{},
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
    var userInfo = wx.getStorageSync('userInfo')
    var userId = 0
    if(userInfo != ''){
      userId == userInfo.userId
    }
    wx.request({
      url: app.serverUrl + "/findArticleByArticleIdAndUserId?articleId=" + articleId + "&userId=" + userId,
      method:'GET',
      success(res){
        if(res){
          that.setData({
            article: res.data.data
          })
          // console.log(res.data.data)
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
    var that = this
    
    // 获取本地用户数据
    var userInfo = wx.getStorageSync('userInfo')
    console.log("userInfo",userInfo=='')
    if(userInfo == ''){
      wx.showToast({
        title: '您暂未登录！',
        icon:'error',
        duration: 2000,
      })
    }else{
      this.setData({
        'article.isLike':!this.data.article.isLike
      })

      wx.request({
        url: app.serverUrl + "/collect?userId=" + userInfo.userId + "&articleId=" + this.data.article.articleId +"&isLike=" + this.data.article.isLike,
        method: 'PUT',
        success(res){
          if(res){
            if(that.data.article.isLike){
              wx.showToast({
                title: '收藏成功！',
                icon:'success',
                duration: 2000
              })
            }else{
              wx.showToast({
                title: '已取消收藏！',
                icon:'success',
                duration: 2000
              })
            }
          }
        }
      })
    }
  },

  // 分享
  share(){
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
  })