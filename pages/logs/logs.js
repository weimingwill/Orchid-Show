//logs.js
var util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
    console.log("on load");
  },
  onReady: function() {
    console.log("on ready");
    // Do something when page ready.
  },
  onShow: function() {
    console.log("on show");
    console.log(app.globalData.userInfo);
    // Do something when page show.
  },
  onHide: function() {
    console.log("on hide");
    // Do something when page hide.
  },
  onUnload: function() {
    console.log("on unload");
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    console.log("on pull down refresh");
    // Do something when pull down.
  },
  onReachBottom: function() {
    console.log("on reach bottom");
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    console.log("on ready");
   // return custom share data when user share.
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})
