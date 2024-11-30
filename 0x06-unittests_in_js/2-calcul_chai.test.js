// 1. In the test file, write tests for each function in the 1-calcul.js file.
import calculateNumber from "./2-calcul_chai.js";
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber", function(){
    describe("type SUM", function(){
        it("should return 4", function(){
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });
        it("should return 4", function(){
            expect(calculateNumber('SUM', 1.1, 3)).to.equal(4);
        });
    });
    describe("type SUBTRACT", function(){
        it("should return -2", function(){
            expect(calculateNumber('SUBTRACT', 1, 3), ).to.equal(-2);
        });
        it("should return -2", function(){
            expect(calculateNumber('SUBTRACT', 1.1, 3)).to.equal(-2);
        });
    });
    describe("type DIVIDE", function(){
        it("should return 0.3333333333333333", function(){
            expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
        });
        it("should return 0.3333333333333333", function(){
            expect(calculateNumber('DIVIDE', 1.1, 3)).to.equal(0.3333333333333333);
        });
        it("should retrun error", function(){
            expect(calculateNumber('DIVIDE', 1, 0)).to.equal("Error");
        });
    });
});
