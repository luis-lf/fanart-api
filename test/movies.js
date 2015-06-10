/**
 * Created by Luis on 09/06/2015.
 */
var fanart = require("..");
var should = require('should');
var API_KEY = 'da08d3be77e8f730eb8196a2e043a27c';


describe("Movies test suite", function() {
    //Disable timeout as request already have 5s timeout
    this.timeout(0);

    describe("Search Movie by id", function () {
        it('"should return a movie object with id \"157336\"', function (done) {
            var client = new fanart(API_KEY);
            client.getMovie('157336', function (error, response) {
                should.ifError(error);
                response.tmdb_id.should.be.equal('157336');
                done();
            });
        });
    });

    describe("Get Latest Movies", function () {
        it('should return json list with latest MOVIE additions', function (done) {
            var client = new fanart(API_KEY);
            client.getLatestMovies(function (error, response) {
                should.ifError(error);
                response.should.be.an.Array;
                done();
            });
        });
    });

});