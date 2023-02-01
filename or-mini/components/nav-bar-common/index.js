// components/nav-bar-common/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTitle:{
      type: String,
      value: '京茶吉鹿'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    menuMarginTop:0,
    menuHeight:0,
  },
  ready(){
    console.log("nav-bar-common 开始工作")
    this.setData({
      menuMarginTop: app.globalData.menuMarginTop,
      menuHeight:app.globalData.menuHeight
    })
    // console.log(this.data.menuMarginTop)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 返回上一页
    navback(){
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
