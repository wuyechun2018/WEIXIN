// pages/articles/articles.js
//var util = require('../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: {},
    containerShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showNavigationBarLoading()
    var that = this;
    var inTheatersUrl = app.globalData.sitaokeUrlBase +
      "/sitaoke/article/pagerListOrderByCreateDate?topicId=1e372929-4bab-4813-a7c2-62bb1c8fab93&page=1&rows=4";
    wx.request({
      url: inTheatersUrl,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
         
        var movies = [];
        if (res.statusCode == 200){
          that.processArticleData(res.data);
      }
      },
      fail: function (error) {
        console.log(error)
      }
    })

  },

  onMovieTap: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: "article-detail/article-detail?id=" + movieId
    })
  },

  processArticleData: function (articleList) {
    var movies = [];
    for (var i = 0; i < articleList.rows.length; i++) {
      var dataObj = articleList.rows[i];
        var showObj = {
          stars: '',
          title: dataObj.articleTitle,
          average: '',
          coverageUrl: app.globalData.sitaokeUrlBase + dataObj.articleImageUrl,
          articleId: dataObj.id
        }
         movies.push(showObj);

      }
     
    var readyData = {};
    readyData['inTheaters'] = {
      categoryTitle: '文章',
      articles: movies
    }
    this.setData(readyData);
    wx.hideNavigationBarLoading();
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})