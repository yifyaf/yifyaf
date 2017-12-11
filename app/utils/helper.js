var axios = require('axios');

var helper = {
    getContent: function() {
        return axios.get('/api_call');
    },
    getGifs: function() {
    	return axios.get('/ass_gifs');
    }
};

module.exports = helper;