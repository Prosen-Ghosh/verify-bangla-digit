var verifyDigit = (function(){
    'use strict';
    function digit(str){
        if(str === undefined || typeof str !== 'string'){
            throw "Function Need A String Arguments"
        }
        if(str.length === 0)return false;
        return [...str].every(function(v){
            return (v.charCodeAt() >= 2534 && v.charCodeAt() <= 2543);
        });
    }
    return digit;
})();
if (typeof module === 'object' && module.exports) {
    module.exports = verifyDigit;
}