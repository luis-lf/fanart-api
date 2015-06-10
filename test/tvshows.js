/**
 * Created by lsampaio on 09/06/2015.
 */
var fanart = require("..");
var should = require('should');
var API_KEY = 'da08d3be77e8f730eb8196a2e043a27c';


describe("TVShow test suite", function() {
    //Disable timeout as request already have 5s timeout
    this.timeout(0);

    describe("Search TVShow by id", function () {
        it('"should return a tvshow object with id \"121361\"', function (done) {
            var client = new fanart(API_KEY);
            client.getTvShow('121361', function (error, response) {
                should.ifError(error);
                response.thetvdb_id.should.be.equal('121361');
                done();
            });
        });
    });

    describe("Get Latest shows", function () {
        it('should return json list with latest tv show additions', function (done) {
            var client = new fanart(API_KEY);
            client.getLatestShows(function (error, response) {
                should.ifError(error);
                response.should.be.an.Array;
                done();
            });
        });
    });

});