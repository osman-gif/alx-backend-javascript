// 1. In the test file, write tests for each function in the 1-calcul.js file.
const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe("calculateNumber", function(){
    describe("type SUM", function(){
        it("should return 4", function(){
            assert.equal(calculateNumber('SUM', 1, 3), 4);
        });
        it("should return 4", function(){
            assert.equal(calculateNumber('SUM', 1.1, 3), 4);
        });
    });
    describe("type SUBTRACT", function(){
        it("should return -2", function(){
            assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
        });
        it("should return -2", function(){
            assert.equal(calculateNumber('SUBTRACT', 1.1, 3), -2);
        });
    });
    describe("type DIVIDE", function(){
        it("should return 0.3333333333333333", function(){
            assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
        });
        it("should return 0.3333333333333333", function(){
            assert.equal(calculateNumber('DIVIDE', 1.1, 3), 0.3333333333333333);
        });
        it("should retrun error", function(){
            assert.equal(calculateNumber('DIVIDE', 1, 0), "Error");
        });
    });
});
