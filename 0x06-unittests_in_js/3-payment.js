import { utils } from "mocha";


function sendPaymentRequestToApi(totalAmount, totalShipping)
{
    const total = utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
}