//nav.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navPageBackPicSrc: '../../resource/images/nav.jpg',
    flyingstudio: "Powered by FlyingStudio \nMade by Icestains 白乌鸫 TItanium Alan Abiscuit",
    isShow: false,
  },

  onReady: function() {
    wx.getSystemInfo({
      success: wxgetSystemInfo => {
        app.globalData.canvasWidth = wxgetSystemInfo.windowWidth;
      }
    })
  },

  onShareAppMessage: function(res) {
    return {
      title: '快来PICK你的矿大专属头像！',
      path: '/pages/nav/nav',
      imageUrl: app.globalData.sharePicSrc
    }
  },

  goIndex: function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  flyingstudio: function() {
    let that = this;
    if (!this.data.isShow) {
      that.setData({
        isShow: true,
      })
    }
    setTimeout(function Hidefs() {
      that.setData({
        isShow: false,
      })
    }, 2000)
  }

})