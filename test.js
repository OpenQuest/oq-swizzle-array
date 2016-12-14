'use strict';

var mocha = require('mocha');
var chai = require('chai');
var swizzle = require('./index.js');

var expect = chai.expect;

describe('Swizzle Array', function() {

    it('should export a function', function() {
        expect(swizzle).to.be.a('function');
    });
});