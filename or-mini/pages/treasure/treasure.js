// pages/treasure/treasure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,subject:'Java',imageUrl:'/assets/background-record.jpg',title:'Java高级编程',describe:'添砖Java'},
      {id:1,subject:'Spring',imageUrl:'/assets/3.jpg',title:'Spring全家桶',describe:'java开发必备知识'},
      {id:1,subject:'Python',imageUrl:'/assets/7.jpeg',title:'Python',describe:'人生苦短，我用Python'},
      {id:1,subject:'Vue.js',imageUrl:'/assets/background-image.jpg',title:'Vue.js',describe:'渐进式的前端框架'},
      {id:1,subject:'BootStrap',imageUrl:'/assets/grill.jpeg',title:'BootStrap',describe:'最流行的前端框架'},
      {id:1,subject:'Nginx',imageUrl:'/assets/2.jpg',title:'Nginx',describe:'高性能反向代理服务器'},
    ]
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },

  handleClick(e){
    var subject = e.currentTarget.dataset.subject
    wx.navigateTo({
      url: '/pages/subject/subject?subject=' + subject,
    })
  }
})