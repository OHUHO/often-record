// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    menuMarginTop: 0,
    menuHeight: 0,
    navOpacity: 0,

    swiperList: [],

    cardList:[
      {id:11,imageUrl:'/assets/7.jpeg',title:'欢迎访问我的Github空间',author:'OUHUO',portrait:'/assets/6.jpeg'},
      {id:9,imageUrl:'/assets/2.jpg',title:'欢迎关注微信公众号',author:'京茶吉鹿',portrait:'/assets/7.jpeg'},
      {id:32,imageUrl:'/assets/3.jpg',title:'微信号',author:'Aubuary',portrait:'/assets/grill.jpeg'},
      {id:12,imageUrl:'/assets/grill.jpeg',title:'所有的账号名称相同【京茶吉鹿】',author:'红林叶',portrait:'/assets/4.png'},
    ],

    oldList:[
      {id:1,author:'京茶吉鹿',time:'昨天',author:'京茶吉鹿',imageUrl:'',title:'会员活动来啦！',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:2,author:'正经程序员',time:'两天前',author:'京茶吉鹿',imageUrl:'/assets/2.jpg',title:'开发戾气',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:3,author:'行走的人',time:'五天前',author:'京茶吉鹿',imageUrl:'/assets/4.png',title:'这个特效可以玩一整天',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测'},
      {id:4,author:'Aubuary',time:'三天前',author:'京茶吉鹿',imageUrl:'',title:'先定个小目标，写两行代码',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据'},
      {id:5,author:'我不是程序员',time:'三个月前',author:'京茶吉鹿',imageUrl:'/assets/7.jpeg',title:'低代码快速开发，没想到小程序还可以这么玩儿',describe:'测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数'},
    ]

  },

  onLoad(){
    this.setData({
      menuMarginTop: app.globalData.menuMarginTop,
      menuHeight: app.globalData.menuHeight
    })

    // 获取轮播图数据
    this.getSlideshow()
	},
	
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
	},

  handleClick(e){
    var article = e.currentTarget.dataset.article
      wx.navigateTo({
        url: '/pages/card/card?article='+JSON.stringify(article),
      })
  },


	// 页面滑动时触发
  onPageScroll(e){
    // console.log(this.data.navOpacity)
    if (e.scrollTop < 50 && this.data.navOpacity != 0) {
      this.setData({
        navOpacity: 0,
      });
    } else if (e.scrollTop > 50 && this.data.navOpacity != 1) {
      /* for(var i =1; i< 10; i++){
        this.setData({
          navOpacity:0.1*i
        })
      } */
      this.setData({
        navOpacity: 0.8,
      });
    }
  },
  
	// 初始化tauchSwiper
  tauchSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      // Math.abs(x) 函数返回指定数字 “x“ 的绝对值
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // tauchSwiper触摸开始
  tauchStart(e) {
    this.setData({
      tauchStart: e.touches[0].pageX
    })
  },
  // tauchSwiper计算方向
  tauchMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.tauchStart > 0 ? 'right' : 'left'
    })
  },
  // tauchSwiper计算滚动
  tauchEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },

  // ==================================================
  getSlideshow(){
    var that = this
    wx.request({
      url: app.serverUrl + '/findAllSlideshow',
      method: 'GET',
      success(res){
        that.setData({
          swiperList:res.data.data
        })
        that.tauchSwiper('swiperList');
        console.log(res.data.data)
      }
    })
  }

})
