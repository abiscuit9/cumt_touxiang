// pages/index/index.js
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
        showPrivacy: false,
        src: '../../static/index/empty.png',
        width: 250,
        height: 250,
        crop: false,
        visibility: "null",
        statusBarHeight: 0,
        uploadImg: '../../static/index/empty.png',
        chooseImg: '../../static/index/frame/2024/5.png',
        makeImg: '../../static/index/frame/2024/5.png',
        imageSrc: null,
        isIphoneX: false,
        cate: '2024',
        cates: [{
                id: "2024",
                name: "115周年校庆款",
            }, 
            {
                id: "other",
                name: "更多",
            }
        ],
        chooseImgs: {
            2024: [{
                name: "001",
                src: "../../static/index/frame/2024/1.png",
            }, {
                name: "002",
                src: "../../static/index/frame/2024/2.png",
            }, {
                name: "003",
                src: "../../static/index/frame/2024/3.png",
            }, {
                name: "004",
                src: "../../static/index/frame/2024/4.png",
            }, {
                name: "005",
                src: "../../static/index/frame/2024/5.png",
            }, {
                name: "006",
                src: "../../static/index/frame/2024/6.png",
            }, {
                name: "007",
                src: "../../static/index/frame/2024/7.png",
            }, {
                name: "008",
                src: "../../static/index/frame/2024/8.png",
            }, ],
            other: [{
                name: "求是创新",
                src: "../../static/index/frame/cumt/01研矿大校风.png",
            }, {
                name: "崇德尚学",
                src: "../../static/index/frame/cumt/02研矿大校训.png",
            }, {
                name: "2023",
                src: "../../static/index/frame/cumt/03研矿大校歌.png",
            }, {
                name: "追求卓越",
                src: "../../static/index/frame/cumt/04研矿大精神.png",
            }, {
                name: "小鹿",
                src: "../../static/index/frame/cumt/05学迎新01.png",
            }, {
                name: "小猫",
                src: "../../static/index/frame/cumt/06学迎新02.png",
            }, {
                name: "拥抱",
                src: "../../static/index/frame/cumt/07学迎新03.png",
            }, {
                name: "好朋友",
                src: "../../static/index/frame/cumt/08学迎新04.png",
            }, {
                name: "黑天鹅",
                src: "url/index/frame/cumt/09研黑天鹅.png",
            }, {
                name: "梅花鹿",
                src: "url/index/frame/cumt/10研鹿.png",
            }, {
                name: "鸵鸟",
                src: "url/index/frame/cumt/11研鸵鸟.png",
            }, {
                name: "图书馆1",
                src: "url/index/frame/cumt/12融图书馆.png",
            }, {
                name: "图书馆2",
                src: "url/index/frame/cumt/14融图书馆.png",
            }, {
                name: "东门",
                src: "url/index/frame/cumt/13融东门.png",
            }, {
                name: "虹桥",
                src: "url/index/frame/cumt/15融虹桥.png",
            }, {
                name: "焦作路矿学堂",
                src: "url/index/frame/cumt/16融焦作路矿学堂.png",
            },{
                    name: "校庆纪念",
                    src: "../../static/index/frame/history/110th.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th01.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th02.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th03.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th04.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th05.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th06.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th07.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th08.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th09.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th10.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th11.png",
                }, {
                    name: "2020校庆",
                    src: "url/index/frame/history/2020111th12.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th01.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th02.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th03.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th04.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th05.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th06.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th07.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th08.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th09.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th10.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th11.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th12.png",
                }, {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th13.png",
                },
                {
                    name: "2021校庆",
                    src: "url/index/frame/history/2021112th14.png",
                },
                {
                    name: "矿业学院",
                    src: "url/index/frame/school/16矿业学院.png",
                }, {
                    name: "安全学院",
                    src: "url/index/frame/school/29安全学院.png",
                }, {
                    name: "安全学院",
                    src: "url/index/frame/school/30安全学院.png",
                }, {
                    name: "力土学院",
                    src: "url/index/frame/school/14力土学院.png",
                }, {
                    name: "力土学院",
                    src: "url/index/frame/school/15力土学院.png",
                }, {
                    name: "机电学院",
                    src: "url/index/frame/school/21机电学院.png",
                }, {
                    name: "机电学院",
                    src: "url/index/frame/school/22机电学院.png",
                }, {
                    name: "信控学院",
                    src: "url/index/frame/school/03信控学院.png",
                }, {
                    name: "信控学院",
                    src: "url/index/frame/school/04信控学院.png",
                },
                {
                    name: "资源学院",
                    src: "url/index/frame/school/01资源学院.png",
                }, {
                    name: "资源学院",
                    src: "url/index/frame/school/02资源学院.png",
                }, {
                    name: "环测学院",
                    src: "url/index/frame/school/23环测学院.png",
                }, {
                    name: "电气学院",
                    src: "url/index/frame/school/26电气学院.png",
                }, {
                    name: "电气学院",
                    src: "url/index/frame/school/27电气学院.png",
                }, {
                    name: "能动学院",
                    src: "url/index/frame/school/10能源学院.png",
                }, {
                    name: "能动学院",
                    src: "url/index/frame/school/11能源学院.png",
                }, {
                    name: "材物学院",
                    src: "url/index/frame/school/28材物学院.png",
                }, {
                    name: "数学学院",
                    src: "url/index/frame/school/07数学学院.png",
                }, {
                    name: "计算机院",
                    src: "url/index/frame/school/20计算机院.png",
                }, {
                    name: "经管学院",
                    src: "url/index/frame/school/18经管学院.png",
                }, {
                    name: "经管学院",
                    src: "url/index/frame/school/19经管学院.png",
                }, {
                    name: "公管学院",
                    src: "url/index/frame/school/24公管学院.png",
                }, {
                    name: "公管学院",
                    src: "url/index/frame/school/25公管学院.png",
                }, {
                    name: "马克思院",
                    src: "url/index/frame/school/12马克思院.png",
                }, {
                    name: "马克思院",
                    src: "url/index/frame/school/13马克思院.png",
                },
                {
                    name: "外文学院",
                    src: "url/index/frame/school/05外文学院.png",
                }, {
                    name: "设计学院",
                    src: "url/index/frame/school/08设计学院.png",
                },
                {
                    name: "设计学院",
                    src: "url/index/frame/school/31设计学院.png",
                }, {
                    name: "人文学院",
                    src: "url/index/frame/school/09人文学院.png",
                }, {
                    name: "孙越崎院",
                    src: "url/index/frame/school/06孙越崎院.png",
                }, 
            ],
        }
    },
    /*iPhone X（解决底部横杠遮挡问题）--监听页面加载*/
    onLoad: function () {
        this.setData({
            "isIphoneX": this.isIphoneX(),
            "statusBarHeight": wx.getSystemInfoSync().statusBarHeight
        })
        this.makeAvatar(this.data.makeImg)
    },
    isIphoneX() {
        let info = wx.getSystemInfoSync();
        if (/iPhone X/i.test(info.model)) {
            return true;
        } else {
            return false;
        }
    },
    /*切换列表*/
    handleCate(e) {
        this.setData({
            cate: e.target.dataset.id
        })
    },
    /*切换头像框*/
    handleAvatar(e) {
        if (this.data.chooseImg == e.target.dataset.avatar) {
            return;
        }
        this.setData({
            chooseImg: e.target.dataset.avatar
        })
        this.makeAvatar(this.data.chooseImg)
    },
    /* 生成头像函数 */
    makeAvatar: function (url) {
        if (url.includes("http")) {
            var that = this
            wx.downloadFile({
                url: url,
                complete(res) {
                    that.drawAvatar(res.tempFilePath)
                    // },
                    // fail(res) {
                    //     console.log(res)
                    //     wx.showToast({
                    //         title: '网络错误，加载失败',
                    //         icon: 'none'
                    //     });
                }
            })
        } else {
            this.drawAvatar(url)
        }
    },
    /*绘制头像*/
    drawAvatar(url) {
        this.setData({
            makeImg: url
        }, () => {
            const scale = wx.getSystemInfoSync().windowWidth / 750
            let context = wx.createCanvasContext('myAvatar', this);
            context.lineJoin = "round";
            context.lineWidth = 20;
            context.clearRect(0, 0, 320 * scale, 320 * scale)
            context.drawImage(this.data.uploadImg, 0, 0, 320 * scale, 320 * scale);
            context.draw(true);
            context.save();
            context.drawImage(this.data.makeImg, 0, 0, 320 * scale, 320 * scale);
            context.draw(true);
            context.save();
            // console.log(1)
            // setTimeout(() => {
            //     wx.canvasToTempFilePath({
            //         canvasId: 'myAvatar',
            //         success: (res) => {
            //             wx.onMemoryWarning(function () {
            //                 console.log('onMemoryWarningReceive')
            //               })
            //             console.log(2)
            //             this.setData({
            //                 imageSrc: res.tempFilePath,
            //             });
            //         },
            //         fail: (res) => {
            //             wx.showToast({
            //                 title: '请重新选择',
            //             })
            //         }
            //     });
            // }, 200);
        })
    },
    /* 获取token */
    get_token() {
        let that = this
        wx.request({
            url: 'pic.abiscuit.net/static///wetoken.abiscuit.net/token?name=wetoken',
            method: 'get',
            data: {

            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                that.data.token = res.data.token
            }
        })
    },
    /* 检查敏感图片 */
    checkPic(url) {
        let that = this
        wx.request({
            url: 'url?access_token=' + that.data.token,
            method: 'post',
            data: {
                openid: 'OPENID',
                scene: 1,
                version: 2,
                media_url: url,
                media_type: 2
            },
            header: {
                'content-type': 'application/raw' // 默认值
            },
            success(res) {}
        })
        return true
    },
    cancel() {
        wx.hideLoading()
        this.setData({
            crop: false,
            visibility: "null"
        })
    },
    reset() {
        this.selectComponent("#image-cropper").imgReset()
    },
    cut(e) {
        wx.hideLoading()
        this.selectComponent("#image-cropper").getImg((res) => {
            this.setData({
                uploadImg: res.url,
                crop: false,
                visibility: "null"
            }, () => {
                this.makeAvatar(this.data.makeImg)
            })
        })
    },
    /*上传剪裁头像*/
    handleUpload() {
        let that = this;
        this.get_token();
        wx.chooseMedia({
            count: 1, // 默认9
            mediaType: ['image'],
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: (res) => {
                wx.showLoading({
                    title: '图片加载中'
                })
                let status = that.checkPic(res.tempFiles[0].tempFilePath)
                console.log(status)
                if (status) {
                    this.setData({
                        crop: true,
                        visibility: "-2000px",
                        src: res.tempFiles[0].tempFilePath,
                    })
                    wx.hideLoading()
                } else {
                    wx.showToast({
                        title: '图片存在风险，请重新上传'
                    })
                }
            }
        })
    },
    recrop() {
        this.setData({
            crop: true,
            visibility: "-2000px",
        })
    },
    /*保存头像*/
    handleSaveImg() {
        wx.canvasToTempFilePath({
            canvasId: 'myAvatar',
            success: res => {
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: res => {
                        wx.showToast({
                            title: '已保存到相册'
                        })
                        setTimeout(() => {
                            /*跳转分享页面*/
                            wx.canvasToTempFilePath({
                                canvasId: 'myAvatar',
                                success: function (res) {
                                    var pic = res.tempFilePath;
                                    wx.setStorageSync('pic', pic)
                                    wx.navigateTo({
                                        url: '/packageB/pages/share/share',
                                    })
                                }
                            });
                        }, 200);
                    },
                    fail(res) {
                        wx.showToast({
                            title: '保存失败',
                            icon: 'none'
                        })
                    }
                })
            }
        })
    },
    /*跳转关于页面*/
    about() {
        wx.navigateTo({
            url:'/packageC/pages/about/about',
        })
    },
})