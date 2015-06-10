/**
 * Created by lsampaio on 09/06/2015.
 */
var fanart = require("..");
var should = require('should');
var API_KEY = 'da08d3be77e8f730eb8196a2e043a27c';


describe("Music test suite", function() {
    //Disable timeout as request already have 5s timeout
    this.timeout(0);

    describe("Search Artist by id", function () {
        it('"should return an artist object with id \"f4a31f0a-51dd-4fa7-986d-3095c40c5ed9\"', function (done) {
            var client = new fanart(API_KEY);
            client.getArtist('f4a31f0a-51dd-4fa7-986d-3095c40c5ed9', function (error, response) {
                should.ifError(error);
                response.mbid_id.should.be.equal('f4a31f0a-51dd-4fa7-986d-3095c40c5ed9');
                done();
            });
        });
    });
    /*
     {
     "name": "Evanescence",
     "mbid_id": "f4a31f0a-51dd-4fa7-986d-3095c40c5ed9",
     "albums": {
     "9ba659df-5814-32f6-b95f-02b738698e7c": {
     "cdart": [
     {
     "id": "12420",
     "url": "http://assets.fanart.tv/fanart/music/f4a31f0a-51dd-4fa7-986d-3095c40c5ed9/cdart/anywhere-but-home-4e9a1074d0999.png",
     "likes": "0

    describe("Search Album by id", function () {
        it('"should return an album object with id \"9ba659df-5814-32f6-b95f-02b738698e7c\"', function (done) {
            var client = new fanart(API_KEY);
            client.getArtist('f4a31f0a-51dd-4fa7-986d-3095c40c5ed9', function (error, response) {
                should.ifError(error);
                response.albums.should.??('9ba659df-5814-32f6-b95f-02b738698e7c');
                done();
            });
        });
    }); */

    describe("Search Label by id", function () {
        it('"should return a label object with id \"e832b688-546b-45e3-83e5-9f8db5dcde1d\"', function (done) {
            var client = new fanart(API_KEY);
            client.getLabel('e832b688-546b-45e3-83e5-9f8db5dcde1d', function (error, response) {
                should.ifError(error);
                response.id.should.be.equal('e832b688-546b-45e3-83e5-9f8db5dcde1d');
                done();
            });
        });
    });


    describe("Get Latest artists", function () {
        it('should return json list with latest artists additions', function (done) {
            var client = new fanart(API_KEY);
            client.getLatestArtists(function (error, response) {
                should.ifError(error);
                response.should.be.an.Array;
                done();
            });
        });
    });



});