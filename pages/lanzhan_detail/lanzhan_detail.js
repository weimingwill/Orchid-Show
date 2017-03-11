Page({
  data: {
    imgUrls: [
'../../images/resources/商城内测.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  onLoad: function(e) {
    var img_url = e.img;
    console.log(img_url);
    this.setData({
        imgUrls: [img_url]
    })
  },
})