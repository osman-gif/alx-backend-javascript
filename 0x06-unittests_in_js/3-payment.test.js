import {jest} from '@jest/globals';

describe("sendPaymentRequestToApi", function(){
    it("should return 104", function(){
        const consoleSpy = console.log;
        console.log = jest.fn();
        sendPaymentRequestToApi(100, 4);
        expect(console.log).toHaveBeenCalledWith('The total is: 104');
        console.log = consoleSpy;
    });
    it("should return 104", function(){
        const consoleSpy = console.log;
        console.log = jest.fn();
        sendPaymentRequestToApi(100, 4);
        expect(console.log).toHaveBeenCalledWith('The total is: 104');
        console.log = consoleSpy;
    });
}
);