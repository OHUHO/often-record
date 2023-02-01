// pages/wechat/wechat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundImage:'/assets/background-center.jpg',
    cardUrl:'/assets/card.jpg'
  },

  // 预览图片
  previewImage(){
    wx.previewImage({
      current: this.data.cardUrl, 
      urls: [this.data.cardUrl] // 需要预览的图片 http 链接列表
    })
  }
})