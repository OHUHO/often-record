// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: ['github', 'gitee', '京茶吉鹿', 'OHUHO', 'CSDN', '微信公众号','掘金'],
    list: [],
  },

  onShow: function () {
    if (wx.getStorageSync('searchHistory')) {
      this.setData({
        list: JSON.parse(wx.getStorageSync('searchHistory')).slice(0, 15)
      })
    }
  },

  getData(e) {
    let data = e.detail.value.replace(/(^\s*)|(\s*$)/g, "");//去掉前后的空格
    if (data.trim() != '') {
      this.data.list.forEach((key, index) => {
        if (key == data) {
          this.data.list.splice(index, 1);
        }
      })
      this.data.list.unshift(data);
      this.setData({
        list: this.data.list.slice(0, 15)
      })
      wx.setStorageSync('searchHistory', JSON.stringify(this.data.list))
      
      this.getSearchResult(data)

    }
  },

  clearInput() {
    this.setData({
      search: ''
    })
  },

  getSearch(e) {
    let { index } = e.currentTarget.dataset, { hotList } = this.data;
    let va = hotList[index]
    this.setData({
      search: va
    })
    // 从后端查找数据
    this.getSearchResult(this.data.search)

    // 将标签存到历史搜索中
    this.data.list.forEach((item, index) => {
      if (item == va) {
        this.data.list.splice(index, 1);
      }
    })
    this.data.list.unshift(va);
    this.setData({
      list: this.data.list.slice(0, 15)
    })
    // console.log(this.data.list)
    wx.setStorageSync('searchHistory', JSON.stringify(this.data.list))
  },

  //清空历史
  clearHistory() {
    // wx.showModal({
    //   title: '提示',
    //   content: '确定清空历史记录？',

    //   complete: (res) => {
    //     if (res.cancel) {
          
    //     }
    //     if (res.confirm) {
    //       this.setData({
    //         list: []
    //       })
    //       wx.removeStorageSync('searchHistory')
    //     }
    //   }
    // })
    this.setData({
      list: []
    })
    wx.removeStorageSync('searchHistory')
    wx.showToast({
      title: '清除成功！',
      icon:'none',
      duration:2000
    })
  },

  getSearchOne(e) {
    let { index } = e.currentTarget.dataset, { list } = this.data;
    let va = list[index]
    this.setData({
      search: va
    })

    // console.log(va)
    this.getSearchResult(this.data.search)

    this.data.list.forEach((item, index) => {
      if (item == va) {
        this.data.list.splice(index, 1);
      }
    })
    this.data.list.unshift(va);
    this.setData({
      list: this.data.list.slice(0, 15)
    })
    // console.log(this.data.list)
    wx.setStorageSync('searchHistory', JSON.stringify(this.data.list))
  },

  getSearchResult(keywords){
    // console.log("keywords",keywords)
    wx.navigateTo({
      url: '/pages/searchDetails/searchDetails?keywords=' + keywords,
    })
    this.setData({
      search: ''
    })
  }

})