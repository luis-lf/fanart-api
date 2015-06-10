/**
 * Created by lsampaio on 08/06/2015.
 * Simple module to access fanart.tv API via nodejs
 */
var request = require('request');

var FanartTv = function(apikey) {
    if (!apikey) {
        throw new Error("API_KEY must be set.");
    }
    this._apikey = apikey;
    this._apiURL = "http://webservice.fanart.tv/v3/";
};

FanartTv.prototype.getApiUrl = function() {
    return this._apiURL;
};

//-------------------------
// TVShows (tvdb id)
//-------------------------
/**
 * getTvShow
 * @param id - Thetvdb show id
 * return - show art or null
 */
FanartTv.prototype.getTvShow = function(id, callback) {
    //tv/75682?api_key=6fa42b0ef3b5f3aab6a7edaa78675ac2
    var url = this._apiURL + 'tv/' + id + '?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};

/**
 * Get the latest tv shows updates
 * @param callback
 */
FanartTv.prototype.getLatestShows = function(callback) {
    var url = this._apiURL + 'tv/latest?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};

//-------------------------
// Movies (tmdb id)
//-------------------------
/**
 * Get Movie by ID
 * @param id
 * @param callback
 */
FanartTv.prototype.getMovie = function(id, callback) {
    var url = this._apiURL + 'movies/' + id + '?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};

/**
 * Get Latest Movies updates
 * @param callback
 */
FanartTv.prototype.getLatestMovies = function(callback) {
    var url = this._apiURL + 'movies/latest?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};

//-------------------------
// Music (musicbrainz id)
//-------------------------
/**
 * Get Artist by id
 * @param id
 * @param callback
 */
FanartTv.prototype.getArtist = function(id, callback) {
    var url = this._apiURL + 'music/' + id + '?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};

/**
 * Get Album by id
 * @param id
 * @param callback
 */
FanartTv.prototype.getAlbum = function(id, callback) {
    var url = this._apiURL + 'music/albums/' + id + '?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};

/**
 * Get Label by id
 * @param id
 * @param callback
 */
FanartTv.prototype.getLabel = function(id, callback) {
    var url = this._apiURL + 'music/labels/' + id + '?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};

/**
 * Get Latest Artists
 * @param callback
 */
FanartTv.prototype.getLatestArtists = function(callback) {
    var url = this._apiURL + 'music/latest?api_key=' + this._apikey;
    send(url, function (error, results) {
        if (!error) {
            //Return response as json
            results = JSON.parse(results);
        }
        return callback(error, results);
    });
};


//-------------------------
// Request method
//-------------------------
function send(url, callback) {
    request({
        url: url,
        method: "GET",
        timeout: 5000
    }, function (error, response, body) {
        //TO-DO Check status code
        /*if (!error) {
            console.log("Status", response.statusCode);
            console.log("Headers", JSON.stringify(response.headers));
            console.log("Response received", body);
        }*/
        //Callback sending results from API
        callback(error, body);
    });
};


module.exports = FanartTv;