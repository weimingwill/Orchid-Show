var app = getApp();

Page({
  data: {
    imgUrls: [
'../../images/resources/福建兰展封面.jpg',
'../../images/resources/长沙兰展封面.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  swipclick: function (e) {
    var img_index = e.currentTarget.dataset.index;
    if (img_index == 0) {
      wx.navigateTo({
          url: '../lanzhan/lanzhan?index=' + img_index,
          success: function () {
            app.globalData.imgIndex = img_index;
          }
      });      
    }
  },
})