//index.js
//获取应用实例
const app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    numList: [{
      name: '进入系统'
    }, 
    {
      name: '身份认证'
    }, 
    {
      name: '基本信息'
    }, {
      name: '证明材料'
    },{
      name: '成绩单'
    }, {
      name: '课程调查'
    }, ],
    num: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTap_login: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },

  onLoad: function () {
    wx.cloud.callFunction({    //调用云函数获取openid
      name:"getOpenid",
      complete:res=>{
        let that = this
        db.collection("student_info").where({
          _openid:res.result.openid   //进行筛选
        }).get({
          success:res=>{
            if(res.data.length != 0){
              that.setData({
                num: 1
              })
            }
            if(res.data[0].ID.length!=0){
              that.setData({
                num: 2
              })
            }
            if(res.data[0].fileIDs.length!=0){
              that.setData({
                num: 3
              })
            }
            if(res.data[0].pdf.length!=0){
              that.setData({
                num: 4
              })
            }
            if(res.data[0].courses.length!=0){
              that.setData({
                num: 5
              })
            }
          },
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  numSteps() {
    if(this.data.num == 0){
      wx.navigateTo({
        url: '/pages/bind/bind'
    })
    }
    if(this.data.num == 1){
      wx.navigateTo({
        url: '/pages/student_info/student_info'
    })
    }
    if(this.data.num == 2){
      wx.navigateTo({
        url: '/pages/uploadImg/uploadImg'
    })
    }
    if(this.data.num == 3){
      wx.navigateTo({
        url: '/pages/uploadImg/uploadPDF'
    })
    }
    if(this.data.num == 4){
      wx.navigateTo({
        url: '/pages/course/course'
    })
    }
    
  },
  inform1(){
    console.log("点击了")
    wx.navigateTo({
      url: '/pages/informs/inform1'
    })
  },
  // tabSelect1(e) {
  //   this.setData({
  //     TabCur: e.currentTarget.dataset.id,
  //     scrollLeft: (e.currentTarget.dataset.id-1)*60
  //   })
  //   wx.navigateTo({
  //     url: '/pages/student_info/student_info'
  //   })
  // },
  // tabSelect2(e) {
  //   this.setData({
  //     TabCur: e.currentTarget.dataset.id,
  //     scrollLeft: (e.currentTarget.dataset.id-1)*60
  //   })
  //   wx.navigateTo({
  //     url: '/pages/course/course'
  //   })
  // },
  // tabSelect3(e) {
  //   this.setData({
  //     TabCur: e.currentTarget.dataset.id,
  //     scrollLeft: (e.currentTarget.dataset.id-1)*60
  //   })
  //   wx.navigateTo({
  //     url: '/pages/uploadImg/uploadImg'
  //   })
  // },
  changeText: function(){
    this.setData({
      motto:app.globalData.data
    })
}
})
