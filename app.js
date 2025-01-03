// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env: 'avatar-0gzfoshmc51baa4c',
      traceUser: true,
    })
  },
  globalData: {
    userInfo: null
  }
})
