Page({
  data: {
    imgUrls: [
'../../images/resources/lanzhan1.jpeg',
'../../images/resources/lanzhan2.jpeg',
'../../images/resources/lanzhan3.jpeg',
'../../images/resources/lanzhan4.jpeg',
'../../images/resources/lanzhan5.jpeg',
'../../images/resources/lanzhan6.jpeg',
'../../images/resources/lanzhan7.jpeg',
'../../images/resources/lanzhan8.jpeg'
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
  }
})