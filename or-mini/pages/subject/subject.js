// pages/subject/subject.js
Page({

  data: {
    navTitle:'',
    articles:[
      {id:1,author:'京茶吉鹿',time:'昨天',author:'京茶吉鹿',imageUrl:'',title:'会员活动来啦！',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:2,author:'正经程序员',time:'两天前',author:'京茶吉鹿',imageUrl:'/assets/2.jpg',title:'开发戾气',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:3,author:'行走的人',time:'五天前',author:'京茶吉鹿',imageUrl:'/assets/4.png',title:'这个特效可以玩一整天',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测'},
      {id:4,author:'Aubuary',time:'三天前',author:'京茶吉鹿',imageUrl:'',title:'先定个小目标，写两行代码',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:5,author:'我不是程序员',time:'三个月前',author:'京茶吉鹿',imageUrl:'/assets/7.jpeg',title:'低代码快速开发，没想到小程序还可以这么玩儿',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数'},
      {id:11,imageUrl:'/assets/7.jpeg',title:'欢迎访问我的Github空间',author:'OUHUO',portrait:'/assets/6.jpeg'},
      {id:9,imageUrl:'/assets/2.jpg',title:'欢迎关注微信公众号',author:'京茶吉鹿',portrait:'/assets/7.jpeg'},
      {id:32,imageUrl:'/assets/3.jpg',title:'微信号',author:'Aubuary',portrait:'/assets/grill.jpeg'},
      {id:12,imageUrl:'/assets/grill.jpeg',title:'所有的账号名称相同【京茶吉鹿】',author:'红林叶',portrait:'/assets/4.png'},
    ]
  },

  onLoad(options) {
    var subject = options.subject
    this.setData({
      navTitle: subject
    })
  },

  
})