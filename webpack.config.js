const path = require('path');

const config = {
    entry:"./assets/js/script.js",
    output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
    },
    mode:"production"
}

module.exports = config;