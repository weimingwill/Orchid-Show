//index.js
//获取应用实例
var app = getApp();
var logger = require("../../utils/logger.js");
Page({
  data: {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    motto: 'Hello',
    userInfo: {}
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow: function () {
    app.globalData.userInfo = "this is human setted data";
    logger.printLog("test print log");
  }
})
