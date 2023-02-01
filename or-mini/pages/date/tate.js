// pages/date/tate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var articles = options.articles
    this.setData({
      articles:JSON.parse(articles)
    })
    console.log(this.data.articles)
  },
})