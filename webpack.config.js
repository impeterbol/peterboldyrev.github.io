const path = require('path');

const config = {
    entry:"./public/assets/js/index.js",
    output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
    },
    mode:"production",
}

module.exports = config;