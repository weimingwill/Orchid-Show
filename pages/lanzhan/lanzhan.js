var app = getApp();

Page({
  data: {
  },
  onLoad: function(options) {
        // var img_index = options.index;
        console.log(app.globalData.imgIndex);
  },

  tabclick: function(e) {
    var img_index = app.globalData.imgIndex;
    var tab_index = e.currentTarget.dataset.index;
    var img_url = '../../images/resources/';
    switch(tab_index) {
      case "0":
        img_url += "空白.jpg";
        break;
      case "1":
        img_url += "活动安排.jpeg";
        break;
      case "2":
        img_url += "酒店.jpg";
        break;
      case "3":
        img_url += "十佳企业.jpg"
        break;
      case "4":
        img_url += "主办单位.jpeg"
        break;
      case "5":
        img_url += "时间地点.jpeg"
        break;
      case "6":
        img_url += "组委会.jpeg"
        break;
    }

    wx.navigateTo({
      url: '../lanzhan_detail/lanzhan_detail?img=' + img_url
    })

  }

})