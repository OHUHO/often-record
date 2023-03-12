// components/line-card/line-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:null,
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e){
      var articleid = e.currentTarget.dataset.articleid
      wx.navigateTo({
        url: '/pages/card/card?articleId=' + articleid ,
      })

    }
  }
})
