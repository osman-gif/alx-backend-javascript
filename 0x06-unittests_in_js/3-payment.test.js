import sinon from 'sinon';
import {sendPaymentRequestToApi} from './payment';

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log the right output', function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).toBe(true);
    });
}
);