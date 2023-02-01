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
      wx.navigateTo({
        url:'/pages/collection/collection',
      })
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

  // 授权登录
  getUserProfile(e) {
    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善你的个人资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res.userInfo)
        const userInfo = res.userInfo
        // 登录并将数据传递给服务器
        var that = this
        wx.login({
          success (res) {
            // console.log(res.code)
            if (res.code) {
              //发起网络请求通过code 获取 openid
              wx.request({
                url: app.serverUrl+"/login",
                data:{
                  code: res.code,
                  nickname: userInfo.nickName,
                  portrait:userInfo.avatarUrl
                },
                header: {'content-type': 'application/x-www-form-urlencoded'},
                method:'POST',
                success(res){
                  var userInfo = res.data.data
                  console.log(userInfo)
                  that.setData({
                    userInfo: userInfo
                  })
                  wx.setStorageSync('userInfo', userInfo)
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      },
      
    })
  },
})