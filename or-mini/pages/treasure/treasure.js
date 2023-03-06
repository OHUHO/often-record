// pages/treasure/treasure.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  onLoad(){
    this.getList();
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },

  handleClick(e){
    var name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '/pages/subject/subject?name=' + name,
    })
  },
  getList(){
    var that = this
    wx.request({
      url: app.serverUrl + "/getSubjects",
      method:'GET',
      success(res){
        if(res.data.data.length > 0){
          that.setData({
            list: res.data.data
          })
        }
      }
    
    })
  }

})