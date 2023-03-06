// pages/record/record.js
const app = getApp()
// var pageIndex = 1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    loadMOreText: '加载更多',
    pageIndex: 1,
  },
  onLoad(){
    this.setData({
      list: [],
    })
    this.getList(1)
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  // look more
  handleLookMore(e){
    var articles = e.currentTarget.dataset.articles
    wx.navigateTo({
      url: '/pages/date/tate?articles=' + JSON.stringify(articles),
    })

  },

  handleClick(e){
    var article = e.currentTarget.dataset.article
      wx.navigateTo({
        url: '/pages/card/card?article='+JSON.stringify(article),
      })
  },

  onReachBottom(){
    this.setData({
      pageIndex: this.data.pageIndex + 1
    })
    // pageIndex += 1;
    // console.log(pageIndex)
    this.getList(this.data.pageIndex)
  },

  getList(pageIndex){
    var that = this;
    wx.request({
      url: app.serverUrl + '/getRecordList?pageIndex='+ pageIndex,
      method: 'POST',
      success(res){
        console.log(res.data.data)
        if(JSON.stringify(res.data.data) != 'null'){
          if(res.data.data.length > 0){
            that.setData({
              list: that.data.list.concat(res.data.data)
            })
          }else{
            that.setData({
              loadMOreText:'没有数据了'
            })
          }
        }
      }
    })
  }

})