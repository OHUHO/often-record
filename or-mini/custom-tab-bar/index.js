// custom-tab-bar/index.js
Component({
  data: {
    selected: 0,
    color: "#FAFAFB",
    selectedColor: "#5cc7b9",
    backgroundColor: "#000000",
    show: true,
    list: [
      {
        pagePath: "/pages/index/index",
        text: "主页",
        iconPath: "/assets/tabbar/index.png",
        selectedIconPath: "/assets/tabbar/index-selected.png"
      },
      {
        pagePath: "/pages/record/record",
        text: "记录线",
        iconPath: "/assets/tabbar/record.png",
        selectedIconPath: "/assets/tabbar/record-selected.png"
      },
      {
        pagePath: "/pages/treasure/treasure",
        text: "百宝箱",
        iconPath: "/assets/tabbar/treasure.png",
        selectedIconPath: "/assets/tabbar/treasure-selected.png"
      },
      {
        pagePath: "/pages/center/center",
        text: "我的",
        iconPath: "/assets/tabbar/center.png",
        selectedIconPath: "/assets/tabbar/center-selected.png"
      },
    ],

  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url,
        success: (res) => {
          let page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad()
        }
      })
      this.setData({
        selected: data.index
      })
    },
   

  },
})
