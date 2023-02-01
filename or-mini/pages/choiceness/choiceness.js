// pages/choiceness/choiceness.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card:{title:'往期精选',describe:'测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测'},
    list: [
      {
        id: 181,
        name: '昵称',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/background-image.jpg',
        avatar: '/assets/6.jpeg'
      },
      {
        id: 42,
        name: '昵称',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/background-record.jpg',
        avatar: '/assets/6.jpeg'
      },
      {
        id: 133,
        name: '昵称',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/background-center.jpg',
        avatar: '/assets/6.jpeg'
      },
      {
        id: 504,
        name: '昵称6',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/card.jpg',
        avatar: '/assets/7.jpeg'
      },
      {
        id: 95,
        name: '昵称2',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/4.png',
        avatar: '/assets/7.jpeg'
      },
      {
        id: 36,
        name: '昵称3',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/7.jpeg',
        avatar: '/assets/7.jpeg'
      },
      {
        id: 71,
        name: '昵称4',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/3.jpg',
        avatar: '/assets/6.jpeg'
      },
      {
        id: 68,
        name: '昵称5',
        num: '99',
        title: '测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测测试数据测试测试测试测',
        imageUrl: '/assets/grill.jpeg',
        avatar: '/assets/grill.jpeg'
      },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  // 搜索
  handleSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  handleClick(e){
    console.log(e)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/card/card?id=' + id,
    })

  },
  
})