// pages/choiceness/choiceness.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card:{title:'往期精选',describe:'测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测'},
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getOldChoiceness()
  },

  // 搜索
  handleSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  handleClick(e){
    console.log(e)
    var articleid = e.currentTarget.dataset.articleid
    wx.navigateTo({
      url: '/pages/card/card?articleId=' + articleid,
    })

  },
  getOldChoiceness(){
    var that = this
    wx.request({
      url: app.serverUrl + "/findOldChoiceness",
      method: 'GET',
      success(res){
        if(res && res.data.data.length > 0){
          that.setData({
            list:res.data.data
          })
        }
      }
    })
  }
  
})