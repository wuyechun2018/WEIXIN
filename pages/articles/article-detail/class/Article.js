var util = require('../../../../utils/util.js')
class Movie {
    constructor(url) {
        this.url = url;
    }

    getMovieData(cb) {
        this.cb = cb;
        util.http(this.url, this.processDoubanData.bind(this));
    }

    processDoubanData(data) {
      debugger;
        if (!data) {
            return;
        }

       
      
        var movie = {
          movieImg: "https://sitaoke.vip"+data.articleImageUrl,
          title: data.articleTitle,
          summary: data.aboutContent,
          detailContent: data.articleContent
        }
        this.cb(movie);
    }
}

export {Movie}