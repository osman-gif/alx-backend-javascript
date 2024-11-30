import sinon from 'sinon';
import {sendPaymentRequestToApi} from './payment';


describe('sendPaymentRequestToApi', function() {
    it('should return 120', function() {
        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        spy.restore();
        sinon.assert.calledWith(spy, 'The total is: 120');
    });
}
);
