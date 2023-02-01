// components/nav-bar-index/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navOpacity:{
      type: Number,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    menuMarginTop:0,
    menuHeight:0,
    // navOpacity: 0,
  },
  ready(){
    // console.log("nav-bar-index 开始工作")
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

  }
  
})
