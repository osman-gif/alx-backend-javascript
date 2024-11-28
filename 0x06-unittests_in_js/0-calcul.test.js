const calculateNumber = require("./0-calcul.js");
const asserts = require("assert");

describe("calculateNumber", function(){
    it("should return 4", function(){
        asserts.equal(calculateNumber(1, 3), 4);
    });
    it("should return 4", function(){
        asserts.equal(calculateNumber(1.1, 3), 4);
    });
});