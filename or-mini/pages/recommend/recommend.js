// pages/recommend/recommend.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ad:{title:'京茶吉鹿',content:'欢迎家人们访问我的 Github 主页【OHUHO】，创作不易，希望家人们给个 Star',image:'/assets/yellow-man.png'},

    oldList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getRecommend()
  },

  getRecommend(){
    var that = this
    wx.request({
      url: app.serverUrl + "/findDailyRecommend",
      method:'GET',
      success(res){
        if(res && res.data.data.length > 0){
          that.setData({
            oldList: res.data.data
          })
        }
      }
    })
  }

})