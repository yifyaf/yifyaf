module.exports = function(app, cheerio, request) {

    app.use('/test', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          next();
        // scrapper();
        // function scrapper() {
        //     var promises = [];

        //     request("https://www.reddit.com/r/all/", function(err, res, html) {

        //         //load the HTML in the Cheerio selector commands
        //         var $ = cheerio.load(html);
        //         var res = [];
        //         console.log(html);
        //         //cheerio will allow me to grab p-tag with the "title" class (i: iterator. element: the current element)
        //         $("div.thing").each(function(i, element) {
        //             // var title = $(element).children("div.entry").children("p.title").children("a").text();
        //             var title = $(element).children('div.entry').children('div.top-matter').children('p.title').children('a').text();
        //             // var link = $(element).children("ul.flat-list").children("li.first").children("a").attr("href");
        //             var upvote = $(element).attr("data-rank");
        //             // var img = $(element).children("a.thumbnail").children("img").attr("src");
        //             var img = $(element).children('a.thumbnail').attr('href');

        //             var article = {
        //                 "title": title,
        //                 "link": upvote,
        //                 "img": img
        //             };

        //             res.push(article);

        //         });
        //             console.log(res);
        //     });
        // }
    });

    // app.use('*', function(req, res) {
    //     console.log('the stars are aligned');
    //     var dir = __dirname;
    //     var dirSplit = dir.split("controllers");
    //     dir = dirSplit[0];

    //     res.sendFile(dir + '/public/index.html');
    // });
};