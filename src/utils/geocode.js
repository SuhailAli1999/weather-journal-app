const request = require("request");

const geocode = (country, callback) => {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1Ijoic3VoYWlsYWxpIiwiYSI6ImNrdXVhNTJtYzAyNW4ybnFmcG9yZDhmem4ifQ.nEwoNtNB6x7U-e5KC2flBw&limit=1`;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location, Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].text,
      });
    }
  });
};

module.exports = geocode;
