// Function that returns the sum of 2 integers
module.exports = function calculateNumber(a, b){
    roundA = Math.round(a);
    roundB = Math.round(b);
    let result = roundA + roundB;
    return result;
}