'use strict';
var isArrayish = require('oq-is-arrayish');
var slice = Array.prototype.slice;

var swizzle = module.exports = function(args) {
    var result = [];
    for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
        if (isArrayish(arg)) {
            result = result.concat(slice.call(arg));
        } else {
            result.push(arg);
        }
    }
    return result;
};


/**
 * 说明：
 * 1. 只做了一层嵌套处理，如可以处理[1,['a']],但是不能处理两层以上的嵌套,如[1,['a',[2]]]
 */