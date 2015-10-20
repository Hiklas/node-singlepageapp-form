/**
 * Test the status service
 */
var request = require('supertest'),
    assert = require('assert'),
    app = require('../lib/server');


describe('Status endpoint', function() {
  describe('GET /status', function() {
    it("Should respond with status 200", function(done) {
          request(app)
            .get('/status')
            .expect(200, done);
          }); 
        }); 
      });



