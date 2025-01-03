import ImageSynthesis from '../../../components/image-synthesis/image-synthesis.js';
const app = getApp();
Page({
/* 转发小程序 */
onShareAppMessage: function () {
    return {
        title: "点击更换中国矿业大学专属头像",
        desc: "给你的头像盖个矿大专属戳",
        imageUrl: "/static/share_img.jpg",
        path: "/packageA/pages/index/index",
        success: function (e) {},
    };
},
onShareTimeline: function () {
    return {
        title: "点击更换中国矿业大学专属头像",
        desc: "给你的头像盖个矿大专属戳",
        imageUrl: "/static/share_img.jpg",
        path: "/packageA/pages/index/index",
        success: function (e) {},
    };
},
    /* 初始数据 */
    data: {
        posterSrc: null,
        imageurl: null,
        backImageUrls: [
            '../../static/share/share01.jpg',
            '../../static/share/share02.jpg',
            '../../static/share/share03.jpg',
            '../../static/share/share04.jpg',
            '../../static/share/share05.jpg',
            '../../static/share/share06.jpg',
            '../../static/share/share07.jpg',
            '../../static/share/share08.jpg',
            '../../static/share/share09.jpg',
            '../../static/share/share10.jpg',
        ],
        backIndex: 0,
    },
    /* 获取生成头像--监听页面加载 */
    onLoad: function (options) {
        const cacheImageUrl = wx.getStorageSync('pic');
        if (cacheImageUrl == void 0) {
            const userInfo = app.globalData.userInfo;
            this.setData({
                imageurl: userInfo.highAvatarUrl == null ? userInfo.avatarUrl : userInfo.highAvatarUrl,
            });
        } else {}
        this.setData({
            imageurl: cacheImageUrl,
        });
    },
    /* 生成海报--监听页面初次渲染完成 */
    onReady: function () {
        this.makePoster(this.data.backImageUrls[this.data.backIndex])
    },
    /* 制作海报函数 */
    makePoster: function (url) {
        wx.showLoading({
            title: '海报生成中',
        });
        if (url.includes("https")) {
            var that = this
            wx.downloadFile({
                url: url,
                complete(res) {
                    that.makePosterImage(res.tempFilePath)
                // },
                // fail(res) {
                //     wx.showToast({
                //         title: '网络错误，取消下载',
                //         icon: 'error',
                //         duration: 1500,
                //         complete() {setTimeout(() => {
                //             that.data.backIndex = 0;
                //             that.makePoster(that.data.backImageUrls[that.data.backIndex])
                //         }, 1500);

                //         }
                //     });
                }
            })
        } else {
            this.makePosterImage(url)
        }
    },
    /* 海报绘图函数 */
    makePosterImage: function (backImage) {
        const {
            imageurl = null,
                backImageUrls,
                backIndex,
        } = this.data;
        if (imageurl != null) {
            const width = 1000;
            const height = 1500;
            const imageSynthesis = new ImageSynthesis(this, 'shareCanvas', width, height);
            imageSynthesis.addImage({
                path: backImage,
                x: 0,
                y: 0,
                w: 1000,
                h: 1500
            }).addImage({
                path: imageurl,
                x: 234,
                y: 391,
                w: 539,
                h: 539,
            }).startCompound((imgurl) => {
                wx.hideLoading();
                if (imageurl) {
                    this.setData({
                        posterSrc: imgurl,
                    });
                } else {
                    this.makePosterImage();
                }
            });
        } else {
            wx.showToast({
                title: '头像错误，生成失败',
                icon: 'none'
            });
        }
    },
    /* 换背景 */
    clickChangeBackImage: function (e) {
        const {
            backIndex,
            backImageUrls,
        } = this.data;
        this.data.backIndex = (backIndex + 1) % backImageUrls.length;
        this.makePoster(this.data.backImageUrls[this.data.backIndex])
    },
    /* 保存分享海报 */
    shareFriend: function (e) {
        const {
            posterSrc = null,
        } = this.data;
        if (posterSrc) {
            wx.showShareImageMenu({
                path: posterSrc
            });
        } else {
            wx.showToast({
                title: '海报异常，请联系开发者',
                icon: 'none'
            });
        }
    },
       /*返回*/
       return() {
        wx.navigateBack()
    },
})