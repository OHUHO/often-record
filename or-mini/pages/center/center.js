// pages/center/center.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,icon:'/assets/collection.png',title:'我的收藏'},
      {id:2,icon:'/assets/wechat.png',title:'微信公众号'},
    ],
    userInfo: null,

  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }

    // 微信授权登录后重新获取信息
    var userInfo = wx.getStorageSync('userInfo')
    if(userInfo != ''){
      this.setData({
        userInfo: userInfo
      })
    }
  },

  onLoad(){
    var userInfo = wx.getStorageSync('userInfo')
    if(userInfo != ''){
      this.setData({
        userInfo: userInfo
      })
    }
  },
  // 处理点击事件
  hanleManage(e){
    var index = e.currentTarget.dataset.index
    if(index == 1){
      const userInfo = wx.getStorageSync('userInfo')
      // console.log(userInfo !='')
      if(userInfo != ''){
        wx.navigateTo({
          url:'/pages/collection/collection',
        })
      }else{
        wx.showToast({
          title: '您暂未登录！',
          icon: 'error',
          duration: 2000,
        })
      }
      
    }else{
      wx.navigateTo({
        url: '/pages/wechat/wechat',
      })
    }
  },

  // 联系作者
  handleContact(){
    console.log('click 联系作者')
  },

  // 用户选择头像昵称
  chooseUserInfo(){
    wx.navigateTo({
      url: '/pages/chooseInfo/chooseInfo',
    })
  },
  
})