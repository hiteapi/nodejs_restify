require('should');
const server = require('./lib/hello_world');
const request = require('supertest').agent(server);

const fs = require('fs');

const expectedBody = JSON.parse(fs.readFileSync(require('path').resolve(__dirname, 'fixtures/hello_world.json'), 'UTF-8'));

describe('Hello World', function() {
  after(function() {
    server.close();
  });

  describe('GET /greetings/1', function() {
    it('should see label ' + expectedBody.label, function(done) {
      request
      .get('/greetings/1')
      .expect(200, function(err, res) {
        if (err) return done(err);
	res.type.should.equal('application/json');
	console.log("res.body: " + res.body);
	var actualBody = JSON.parse(res.body);
	actualBody.label.should.eql(expectedBody.label);
        done();
      });
    });
  });

});
