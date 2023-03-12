// pages/searchDetails/searchDetails.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var keywords = options.keywords
    // console.log(keywords)

    var that = this
    wx.request({
      url: app.serverUrl + '/findArticleByKeywords?keywords=' + keywords,
      method:'GET',
      success(res){
        if(res.data.data.length > 0){
          that.setData({
            articles: res.data.data
          })
        }
      }
    })
  },

  
})