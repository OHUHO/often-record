// pages/subject/subject.js
const app = getApp()
Page({

  data: {
    navTitle:'',
    articles:[]
  },

  onLoad(options) {
    var subjectId = options.subjectId
    // console.log(subjectId)
    this.getSubjectBySubjectId(subjectId)

  },
  getSubjectBySubjectId(subjectId){
    var that = this
    wx.request({
      url: app.serverUrl + '/findSubjectBySubjectId?subjectId=' + subjectId,
      method:'GET',
      success(res){
        if(res){
          const  temp = res.data.data
          that.setData({
            navTitle: temp.name
          })
          that.getArticleBySubjectId(temp.subjectId)
        }
      }
    })
  },

  getArticleBySubjectId(subjectId){
    var that = this
    wx.request({
      url: app.serverUrl + '/findArticleBySubjectId?subjectId=' + subjectId,
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