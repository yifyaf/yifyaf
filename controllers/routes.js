module.exports = function(app, request) {
    app.get('/', function(req, res) {
        console.log('welcome to my pokemon credetials');
    });

    app.get('/api_call', function(req, res) {
        const url = 'http://www.reddit.com/r/collegesluts/new.json?limit=500&after=t31qa3v3&count=10';

        request(url, function(err, data, body) {
            var MyList = [];
            var json = JSON.parse(data.body);
            var responseData = json.data.children;

            responseData.forEach(function(item) {
                var data_img = item.data.url;
                // console.log('fromt the list', item.data.domain, '  ', data_img);
                if (item.data.domain === 'i.imgur.com' && data_img.charAt(data_img.length - 1) == 'v') {
                    console.log('imagurg')
                    data_img = data_img.slice(0, -1);
                }
                else if (item.data.domain === 'gfycat.com') {
                    console.log('gyfycat')
                    data_img = 'http://developers.gfycat.com/api/images/logo.png';
                }
                MyList.push({
                    author: item.data.author,
                    img: data_img,
                    user_link: 'http://www.reddit.com/user/' + item.data.author,
                    url: item.data.url,
                    title: item.data.title.toUpperCase()
                });
            });
            res.send(MyList);
        });
    });

    app.get('*', function(req, res) {
        res.send('/');
    });
};
