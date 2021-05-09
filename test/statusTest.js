var expect = require('chai').expect;
var request = require("request");

describe("API Status Test", () => {
    
    describe("All locations", () => {
        
        var url = "http://localhost:4001/all";

        it("should return all locations", (done) => {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(response.body).locations).to.be.a('array');
                expect(JSON.parse(response.body).locations.length).to.be.above(0);
                expect(JSON.parse(response.body).locations[0]).to.have.property('id');
                expect(JSON.parse(response.body).locations[0]).to.have.property('name');
                expect(JSON.parse(response.body).locations[0]).to.have.property('country_code');
                expect()
                done();
            });
        });
    });

    describe("Locations query", () => {
        
        var url = "http://localhost:4001/locations?q=A";

        it("returns status 200", (done) => {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(response.body).locations).to.be.a('array');
                done();
            });
        });
    });

    describe("Invalid URL", () => {
        
        var url = "http://localhost:4001/thisIsAnInvalidURL";

        it("returns status 404", (done) => {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });
    });
});
