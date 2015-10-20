/**
 * http://usejsdoc.org/
 */
var request = require('supertest'),
    assert = require('assert'),
    app = require('../lib/server');


describe('RC Backend', function() {
  describe('GET /status', function() {
    it("Should respond with status 200", function(done) {
          request(app)
            .get('/status')
            .expect(200, done);
          }); 
        }); 
      });



