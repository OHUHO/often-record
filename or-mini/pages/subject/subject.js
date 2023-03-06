// pages/subject/subject.js
Page({

  data: {
    navTitle:'',
    articles:[
      {id:1,nickname:'京茶吉鹿',createTime:'昨天',nickname:'京茶吉鹿',cover:'',title:'会员活动来啦！',introduction:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:2,nickname:'正经程序员',createTime:'两天前',nickname:'京茶吉鹿',cover:'/assets/grill.jpeg',title:'开发戾气',introduction:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:3,nickname:'行走的人',createTime:'五天前',nickname:'京茶吉鹿',cover:'',title:'这个特效可以玩一整天',introduction:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测'},
    ]
  },

  onLoad(options) {
    var name = options.name
    this.setData({
      navTitle: name
    })

    //  通过专题名称获取信息
    // this.getArticles(name)
  },

  getArticles(name){
    var that = this
    wx.request({
      url: app.serverUrl + '/findArticlesBySubjectName?name=' + name,
      method:'GET',
      success(res){
        if(res && res.data.data.length > 0){
          that.setData({
            articles: res.data.data
          })
        }
      }
    })
  }

  
})