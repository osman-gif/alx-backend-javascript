// Write a test with Jest for the function calculateNumber
const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber", function(){
    it("should return 4", function(){
        assert.equal(calculateNumber(1, 3), 4);
    });
    it("should return 4", function(){
        assert.equal(calculateNumber(1.1, 3), 4);
    });
    it("should retun 4", function(){
        assert.equal(calculateNumber(3, 1.1), 4);
    });
});
