const request = require("request");

const forecast = (latitude, longitude, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=e27844dd7033d5b7e91c41e3277bcb7c&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error) {
      callback("Unable to find location, Try another search.", undefined);
    } else {
      callback(
        undefined,{
        temp: body.current.temperature,
        png: body.current.weather_icons[0]
        }
      );
    }
  });
};

module.exports = forecast;
