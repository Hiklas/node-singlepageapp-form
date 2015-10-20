/**
 * Test the status service
 */
var request = require('supertest'),
    assert = require('assert'),
    app = require('../lib/server');


describe('Static files', function() {
  describe('GET /index.html', function() {
      it("Should serve index.html", function (done) {
          request(app).get('/index.html').expect(200, done);
      });
  });

  describe('GET /js/node-singlepageapp-form.js', function() {
    it("Should serve js/node-singlepageapp-form.js", function(done) {
        request(app).get('/js/node-singlepageapp-form.js').expect(200, done);
    });
  });

  describe('GET /css/node-singlepageapp-form.css', function() {
    it("Should serve css/node-singlepageapp-form.css", function(done) {
        request(app).get('/css/node-singlepageapp-form.css').expect(200, done);
    });
  });

});



