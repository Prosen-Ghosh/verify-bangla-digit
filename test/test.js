const assert = require('chai').assert;
const verifyDigit = require('../verify-bangla-digit');

describe("Verify Bangla Digit",function(){
    it('All Bangla Digit Should Retun True',function(){
        assert.equal(verifyDigit('১২৩৪৫৬৭৮৯০'),true);
    });

    it('Function Empty Parameter Should Return False',function(){
        assert.equal(verifyDigit(''),false);
    });

    it('Alphanumeric Parameter Should Return False',function(){
        assert.equal(verifyDigit('১২৩৪৫৬৭৮৯০A'),false);
    });
});