var axios = require('axios');

var helper = {
    getContent: function() {
        return axios.get('/api_call');
    }
};

module.exports = helper;