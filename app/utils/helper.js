var axios = require('axios');

var helper = {
    getContent: function() {
        return axios.get('/api_call');
    },
    getGifs: function() {
    	return axios.get('/gifs');
    },
    getVideos: function() {
    	return axios.get('/api/test');
    }
};

module.exports = helper;