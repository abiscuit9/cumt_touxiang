//index.js
const app = getApp()


Page({
  data: {
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    logoPath: 1,

    navPageBackPicSrc: '../../resource/images/avatar.jpg',
    btn_getAvatar: '../../resource/images/btn_1.png',
    btn_changeAvatar: '../../resource/images/btn_2.png',
    btn_leftArrow: '../../resource/images/arrow_1.png',
    btn_rightArrow: '../../resource/images/arrow_2.png',
    logoArr: []
  },
  

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  onShareAppMessage: function (res) {
    return {
      title: '快来给你换上一个矿大专属头像吧！',
      path: '/pages/nav/nav',
      imageUrl: app.globalData.sharePicSrc
    }
  },

  onReady: function () {
    this.runWhenFinishReady()
  },

  runWhenFinishReady: function () {
    for (let i = 0; i <= 14; i++) {
      this.data.logoArr.push(`../../resource/images/logo_${i}.png`)
    }
    if (app.globalData.avatarUrl) {
      this.setData({
        hasUserInfo: true
      })
      app.globalData.avatarUrl = app.globalData.avatarUrlOrigin;
      this.drawCanvas(this.data.logoPath, app.globalData.avatarUrlOrigin);
    }
    if (app.globalData.userInfo && this.data.hasUserInfo) {
      app.globalData.avatarUrl = app.globalData.avatarUrlOrigin;
      this.setData({
        hasUserInfo: true
      })
      this.drawCanvas(this.data.logoPath, app.globalData.avatarUrl)
    }
  },

  //获取用户信息
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.globalData.avatarUrl = res.userInfo.avatarUrl.replace(/132/g, '0');
        app.globalData.avatarUrlOrigin = res.userInfo.avatarUrl.replace(/132/g, '0');
        this.createImage(app.globalData.avatarUrl)
      }
    })
  },

  //draw
  drawCanvas: function (logoPath, avatarPath) {
    let that = this;
    let ctx = wx.createCanvasContext('myCanvas');
    let cWidth = app.globalData.canvasWidth * 60 / 100;

    if (logoPath === 0 ) {
      ctx.drawImage(avatarPath, 0, 0, cWidth, cWidth);
      ctx.drawImage(that.data.logoArr[0], cWidth / 12, cWidth * 7 / 12, cWidth / 3, cWidth / 3);
    }else if (logoPath === 1) {
      ctx.drawImage(avatarPath, cWidth / 8, cWidth / 8, cWidth * 3 / 4, cWidth * 3 / 4);
      ctx.drawImage(that.data.logoArr[logoPath], 0, 0, cWidth, cWidth);
    } else if (2 <= logoPath && logoPath <= 3) {
      ctx.drawImage(avatarPath, cWidth * 1 / 18, cWidth * 1 / 18, cWidth * 8 / 9, cWidth * 8 / 9);
      ctx.drawImage(that.data.logoArr[logoPath], 0, 0, cWidth, cWidth);
    } else if (4 <= logoPath && logoPath <= 5) {
      ctx.drawImage(avatarPath, cWidth * 1 / 12, cWidth * 1 / 12, cWidth * 5 / 6, cWidth * 5 / 6);
      ctx.drawImage(that.data.logoArr[logoPath], 0, 0, cWidth, cWidth);
    } else if (6 <= logoPath && logoPath <= 7) {
      ctx.drawImage(avatarPath, cWidth * 1 / 20, cWidth * 1 / 20, cWidth * 9 / 10, cWidth * 9 / 10);
      ctx.drawImage(that.data.logoArr[logoPath], 0, 0, cWidth, cWidth);
    } else if (8 <= logoPath && logoPath <= 11) {
      ctx.drawImage(avatarPath, cWidth / 16, cWidth / 16, cWidth * 7 / 8, cWidth * 7 / 8);
      ctx.drawImage(that.data.logoArr[logoPath], 0, 0, cWidth, cWidth);
    } else if (logoPath === 12) {
      ctx.drawImage(avatarPath, cWidth * 1 / 14, cWidth * 1 / 14, cWidth * 6 / 7, cWidth * 6 / 7);
      ctx.drawImage(that.data.logoArr[logoPath], 1, -5, cWidth, cWidth);
    }else if (logoPath === 13) {
      ctx.drawImage(avatarPath, cWidth * 1 / 14, cWidth * 1 / 14, cWidth * 6 / 7, cWidth * 6 / 7);
      ctx.drawImage(that.data.logoArr[logoPath], 2, 0, cWidth, cWidth);
    } else if (logoPath === 14) {
      ctx.drawImage(avatarPath, cWidth * 1 / 14, cWidth * 1 / 14, cWidth * 6 / 7, cWidth * 6 / 7);
      ctx.drawImage(that.data.logoArr[logoPath], -3, 0, cWidth, cWidth);
    }

    ctx.draw();
    wx.getImageInfo({
      src: avatarPath,
      success: function (res) {
        let ctxHide = wx.createCanvasContext('myCanvasHide');
        let cWidthHide = res.width;
        let cHeightHide = res.height;
        if (cWidthHide > 1000 || cHeightHide > 1000) {
          cWidthHide = 1000;
        }
        app.globalData.WidthOrigin = cWidthHide

        if (logoPath === 0 ) {
          ctxHide.drawImage(avatarPath, 0, 0, cWidthHide, cWidthHide);
          ctxHide.drawImage(that.data.logoArr[0], cWidthHide / 12, cWidthHide * 7 / 12, cWidthHide / 3, cWidthHide / 3);
        }else if (logoPath === 1) {
          ctxHide.drawImage(avatarPath, cWidthHide / 8, cWidthHide / 8, cWidthHide * 3 / 4, cWidthHide * 3 / 4);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        } else if (2 <= logoPath && logoPath <= 3) {
          ctxHide.drawImage(avatarPath, cWidthHide * 1 / 18, cWidthHide * 1 / 18, cWidthHide * 8 / 9, cWidthHide * 8 / 9);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        } else if (4 <= logoPath && logoPath <= 5) {
          ctxHide.drawImage(avatarPath, cWidthHide * 1 / 12, cWidthHide * 1 / 12, cWidthHide * 5 / 6, cWidthHide * 5 / 6);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        } else if (6 <= logoPath && logoPath <= 7) {
          ctxHide.drawImage(avatarPath, cWidthHide * 1 / 20, cWidthHide * 1 / 20, cWidthHide * 9 / 10, cWidthHide * 9 / 10);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        } else if (8 <= logoPath && logoPath <= 11) {
          ctxHide.drawImage(avatarPath, cWidthHide / 16, cWidthHide / 16, cWidthHide * 7 / 8, cWidthHide * 7 / 8);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        } else if (logoPath === 12) {
          ctxHide.drawImage(avatarPath, cWidthHide * 1 / 14, cWidthHide * 1 / 14, cWidthHide * 6 / 7, cWidthHide * 6 / 7);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        } else if (logoPath === 13) {
          ctxHide.drawImage(avatarPath, cWidthHide * 1 / 14, cWidthHide * 1 / 14, cWidthHide * 6 / 7, cWidthHide * 6 / 7);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        } else if (logoPath === 14) {
          ctxHide.drawImage(avatarPath, cWidthHide * 1 / 14, cWidthHide * 1 / 14, cWidthHide * 6 / 7, cWidthHide * 6 / 7);
          ctxHide.drawImage(that.data.logoArr[logoPath], 0, 0, cWidthHide, cWidthHide);
        }
        ctxHide.draw();
        wx.hideLoading()
      },
    })
  },

  // createNewImg
  //创建新头像
  createImage: function (picpath) {
    let that = this;
    wx.downloadFile({
      url: picpath,
      success: function (res) {
        if (res.statusCode === 200) {
          app.globalData.avatarUrl = res.tempFilePath;
          app.globalData.avatarUrlOrigin = res.tempFilePath;
          that.drawCanvas(that.data.logoPath, app.globalData.avatarUrl);
        }
      }
    })
  },

  //保存图片。
  savePic: function () {
    let that = this;
    if (this.data.hasUserInfo) {
      let WidthOrigin = app.globalData.WidthOrigin
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: WidthOrigin,
        height: WidthOrigin,
        destWidth: WidthOrigin,
        destHeight: WidthOrigin,
        canvasId: 'myCanvasHide',
        success: function (res) {
          app.globalData.shareAvatarUrl = res.tempFilePath
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              wx.showModal({
                title: '已保存',
                content: '新头像已经保存到手机相册里啦！快去换上专属于你的矿大头像!',
                showCancel: false,
                success: function (res) {
                  that.goShare();
                }
              })
            },
            fail(res) {
              wx.showModal({
                title: '提示',
                content: '您需要在小程序设置中打开保存到相册的授权才能保存图片!',
                showCancel: false,
              })
            }
          })
        }
      })
    } else {
      wx.showToast({
        title: '请先获取头像',
        icon: 'none',
        mask: true,
        duration: 1500
      })
    }
  },

  //选择本地图片
  chooseLocalImage: function () {
    let that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        app.globalData.avatarUrl = tempFilePaths[0];
        that.setData({
          hasUserInfo: true
        })
        if (!(that.data.changedLogo)) {
          that.drawCanvas(that.data.logoPath, app.globalData.avatarUrl);

        } else {
          that.drawCanvas(that.data.logoPath, app.globalData.avatarUrl);
          that.data.changedLogo = false;
          that.changeLogo();
        }
      },
    })
  },

  changeLogoRight: function () {
    let that = this;
    if (app.globalData.avatarUrl) {
      let tempNum = 1;
      if (that.data.logoPath < that.data.logoArr.length - 1) {
        tempNum = that.data.logoPath + 1;
      } else {
        tempNum = 0;
      }
      that.setData({
        logoPath: tempNum,
      })
      that.drawCanvas(tempNum, app.globalData.avatarUrl);
    }
  },

  changeLogoLeft: function () {
    let that = this;
    if (app.globalData.avatarUrl) {
      var tempNum = 1;
      if (that.data.logoPath > 0) {
        tempNum = that.data.logoPath - 1;
      } else {
        tempNum = that.data.logoArr.length - 1;
      }
      that.setData({
        logoPath: tempNum,
      })
      that.drawCanvas(tempNum, app.globalData.avatarUrl);
    }
  },

  goShare: function () {
    wx.navigateTo({
      url: '../share/share',
    })
  },
})