var data = {
    timestamp : 20171229165932,
    weather : {
        temp : 49,
        forecast : "sunny"
    }
};

var time = data.timestamp;
var forecast = data.weather.forecast;
console.log("time of request: " + time);
console.log("day of forecast: " + forecast);