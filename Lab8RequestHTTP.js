const request = require('request');
request('https://api.genshin.dev/enemies', function (error, response, body) {
    console.error("error: ", error);
    console.log("statusCode: ", response && response.statusCode);
    console.log("body: ", body);
});