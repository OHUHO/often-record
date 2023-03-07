// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    navOpacity: 0,
    swiperList: [],
    cardList:[],
    oldList:[]

  },

  onLoad(){
    // 获取轮播图数据
    this.getSlideshow()
    // 获取每日推荐
    this.getDaily()
    // 获取往期精选
    this.getOld()
    
	},
	
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
	},

  handleClick(e){
    var articleid = e.currentTarget.dataset.articleid
      wx.navigateTo({
        url: '/pages/card/card?articleId=' + articleid,
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
        // console.log(res.data.data)
      }
    })
  },
  getDaily(){
    var that = this
    wx.request({
      url: app.serverUrl + '/findArticleFour',
      method: 'GET',
      success(res){
        that.setData({
          cardList:res.data.data
        })
        // console.log(res.data.data)
      }
    })
  },

  getOld(){
    var that = this
    wx.request({
      url: app.serverUrl + '/findArticleOderByCollect',
      method: 'GET',
      success(res){
        that.setData({
          oldList:res.data.data
        })
        console.log(res.data.data)
      }
    })
  },




})
