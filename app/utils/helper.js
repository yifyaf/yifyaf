var axios = require('axios');

var helper = {
    runQuery: function() {

        var queryURL = 'http://www.reddit.com/r/collegesluts/new.json?limit=500&after=t31qa3v3&count=10';
        var myList = [];

        axios.get(queryURL).then(function(res){
            var responseData = res.data.data.children;

            for (var i in responseData) {

                var data_img = responseData[i].data.url;

                if (responseData[i].data.domain == 'i.imgur.com' && data_img.charAt(data_img.length - 1) == 'v') {
                    data_img = data_img.slice(0, -1);
                }
                else if (responseData[i].data.domain == 'gfycat.com') {
                    data_img = 'http://developers.gfycat.com/api/images/logo.png'
                }

                let top100 = {
                    author: responseData[i].data.author,
                    img: data_img,
                    user_link: 'http://www.reddit.com/user/' + responseData[i].data.author,
                    url: responseData[i].data.url,
                    title: responseData[i].data.title.toUpperCase()
                }

                myList.push(top100);
            }
            return myList;
        })
    }
};

module.exports = helper;