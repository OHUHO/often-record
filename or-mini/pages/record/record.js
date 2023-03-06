// pages/record/record.js
const app = getApp()
var pageIndex = 1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      time: "11月27日 星期日",
      describe: '1234期 未来会是什么样的啊！',
      content:[
        {id:11,imageUrl:'/assets/7.jpeg',title:'欢迎家人们访问我的Github空间【OHUHO】',author:'OUHUO',portrait:'/assets/6.jpeg'},
        {id:9,imageUrl:'/assets/2.jpg',title:'欢迎关注微信公众号',author:'京茶吉鹿',portrait:'/assets/7.jpeg'},
        {id:32,imageUrl:'/assets/3.jpg',title:'微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号微信号',author:'Aubuary',portrait:'/assets/grill.jpeg'},
        {id:12,imageUrl:'/assets/grill.jpeg',title:'所有的账号名称相同【京茶吉鹿】',author:'红林叶',portrait:'/assets/4.png'},
      ]
    },
    {
      time: "11月23日 星期三",
      describe: '1099期 一起探索世界啊！',
      content:[
        {id:1,author:'京茶吉鹿',time:'昨天',author:'京茶吉鹿',imageUrl:'',title:'会员活动来啦！',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:2,author:'正经程序员',time:'两天前',author:'京茶吉鹿',imageUrl:'/assets/2.jpg',title:'开发戾气',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:3,author:'行走的人',time:'五天前',author:'京茶吉鹿',imageUrl:'/assets/6.jpeg',title:'这个特效可以玩一整天',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测'},
        {id:4,author:'Aubuary',time:'三天前',author:'京茶吉鹿',imageUrl:'',title:'先定个小目标，写两行代码',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:5,author:'我不是程序员',time:'三个月前',author:'京茶吉鹿',imageUrl:'/assets/7.jpeg',title:'低代码快速开发，没想到小程序还可以这么玩儿',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数'},
      ]
    },
    {
      time: "11月21日 星期一",
      describe: '1090期 今天开心了吗',
      content:[
        {id:2,author:'正经程序员',time:'两天前',author:'京茶吉鹿',imageUrl:'/assets/2.jpg',title:'开发戾气',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:1,author:'京茶吉鹿',time:'昨天',author:'京茶吉鹿',imageUrl:'',title:'会员活动来啦！',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:4,author:'Aubuary',time:'三天前',author:'京茶吉鹿',imageUrl:'',title:'先定个小目标，写两行代码',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:3,author:'行走的人',time:'五天前',author:'京茶吉鹿',imageUrl:'/assets/6.jpeg',title:'这个特效可以玩一整天',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测'},
        {id:9,imageUrl:'/assets/2.jpg',title:'欢迎关注微信公众号',author:'京茶吉鹿',portrait:'/assets/7.jpeg'},
        {id:5,author:'我不是程序员',time:'三个月前',author:'京茶吉鹿',imageUrl:'/assets/7.jpeg',title:'低代码快速开发，没想到小程序还可以这么玩儿',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数'},
      ]
    },
    {
      time: "11月17日 星期二",
      describe: '1000期 一起奋斗吧',
      content:[
        {id:5,author:'我不是程序员',time:'三个月前',author:'京茶吉鹿',imageUrl:'/assets/7.jpeg',title:'低代码快速开发，没想到小程序还可以这么玩儿',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数'},
      ]
    },
    {
      time: "11月10日 星期五",
      describe: '999期 先定个小目标',
      content:[
        {id:11,imageUrl:'/assets/7.jpeg',title:'欢迎访问我的Github空间',author:'OUHUO',portrait:'/assets/6.jpeg'},
        {id:9,imageUrl:'/assets/2.jpg',title:'欢迎关注微信公众号',author:'京茶吉鹿',portrait:'/assets/7.jpeg'},
        {id:32,imageUrl:'/assets/3.jpg',title:'微信号',author:'Aubuary',portrait:'/assets/grill.jpeg'},
        {id:12,imageUrl:'/assets/grill.jpeg',title:'所有的账号名称相同【京茶吉鹿】',author:'红林叶',portrait:'/assets/4.png'},
      ]
    },
    {
      time: "11月08日 星期一",
      describe: '996期 留下了加班吧！',
      content:[
        {},
        {},
      ]
    },
    {
      time: "10月27日 星期三",
      describe: '这位是司电话费斯柯达粉红色',
      content:[
        {id:2,author:'正经程序员',time:'两天前',author:'京茶吉鹿',imageUrl:'/assets/2.jpg',title:'开发戾气',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:1,author:'京茶吉鹿',time:'昨天',author:'京茶吉鹿',imageUrl:'',title:'会员活动来啦！',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:4,author:'Aubuary',time:'三天前',author:'京茶吉鹿',imageUrl:'',title:'先定个小目标，写两行代码',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
        {id:3,author:'行走的人',time:'五天前',author:'京茶吉鹿',imageUrl:'/assets/6.jpeg',title:'这个特效可以玩一整天',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测'},
        {id:9,imageUrl:'/assets/2.jpg',title:'欢迎关注微信公众号',author:'京茶吉鹿',portrait:'/assets/7.jpeg'},
        {id:5,author:'我不是程序员',time:'三个月前',author:'京茶吉鹿',imageUrl:'/assets/7.jpeg',title:'低代码快速开发，没想到小程序还可以这么玩儿',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数'},
      ]
    },
    ],
    loadMOreText: '加载更多',

  },
  onLoad(){
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
    pageIndex += 1;
    console.log(pageIndex)
    this.getList(pageIndex)
  },

  getList(pageIndex){
    var that = this;
    wx.request({
      url: app.serverUrl + '/getRecordList?pageIndex='+ pageIndex,
      method: 'POST',
      success(res){
        if(res.data.data.length > 0){
          that.setData({
            list: this.data.list.concat(res.data.data)
          })
        }else{
          that.setData({
            loadMOreText:'没有数据了'
          })
        }
      }
    })
  }

})