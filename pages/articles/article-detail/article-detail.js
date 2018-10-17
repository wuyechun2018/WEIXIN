import { Movie } from 'class/Article.js';
var app = getApp();
Page({
    data: {
        movie: {},
        visible: false
    },
    onLoad: function(options) {
        var movieId = options.id;
        //var url = app.globalData.doubanBase + "/v2/movie/subject/" + movieId;
      var url = app.globalData.sitaokeUrlBase + "/sitaoke/article/data/" + movieId;
      var movie = new Movie(url);
       
        //C#、Java、Python lambda
        movie.getMovieData((movie) => {
            this.setData({
                movie: movie
            });
            this.setData({
                visible: true
            });
        })
    },

    /*查看图片*/
    viewMoviePostImg: function(e) {
        var src = e.currentTarget.dataset.src;
        wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: [src] // 需要预览的图片http链接列表
        })
    },
})
