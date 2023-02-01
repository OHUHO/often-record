// components/look-more/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value:'标题',
    },
    describe:{
      type: String,
      value: '描述信息',
    },
    clickIndex:{
      type: Number,
      value: -1
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
    lookMore(){
      var index = this.properties.clickIndex
      if(index == -1){
        console.log('您未设定 clickIndex 的值')
      }else if(index == 1){
        wx.navigateTo({
          url: '/pages/recommend/recommend',
        })
      }else{
        wx.navigateTo({
          url:'/pages/choiceness/choiceness'
        })
      }
    }
  }
  
})