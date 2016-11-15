"use strict";

var chai = require('chai');
var expect = chai.expect;

var OtherMarkup = require('../calculator/othermarkup.js');
var Markups = require('../calculator/markup_config.js');

describe('OtherMarkup', function() {
  var om = new OtherMarkup();
  var markups = new Markups();

  describe('#getLaborMarkup()', function() {
    it('should return the markup based on number of people working', function() {
      expect(om.getLaborMarkup(100, markups.LABOR_MARKUP_RATE, 1)).to.be.a('number');
      expect(om.getLaborMarkup(100, markups.LABOR_MARKUP_RATE, 1)).to.equal(1.2);
      expect(om.getLaborMarkup(100, markups.LABOR_MARKUP_RATE, 3)).to.equal(3.6);
    });
  });

  describe('#getOtherMarkup()', function() {
    it('should return the markup based on pharmaceuticals markup rate', function() {
      expect(om.getOtherMarkup(100, markups.PHARM_MARKUP_RATE)).to.be.a('number');
      expect(om.getOtherMarkup(100, markups.PHARM_MARKUP_RATE)).to.equal(7.5);
      expect(om.getOtherMarkup(100.11, markups.PHARM_MARKUP_RATE)).to.equal(7.51);
    });
  });

  describe('#getOtherMarkup()', function() {
    it('should return the markup based on food markup rate', function() {
      expect(om.getOtherMarkup(100, markups.FOOD_MARKUP_RATE)).to.be.a('number');
      expect(om.getOtherMarkup(100, markups.FOOD_MARKUP_RATE)).to.equal(13);
      expect(om.getOtherMarkup(100.11, markups.FOOD_MARKUP_RATE)).to.equal(13.01);
    });
  });

  describe('#getOtherMarkup()', function() {
    it('should return the markup based on electronics markup rate', function() {
      expect(om.getOtherMarkup(100, markups.ELECTRONICS_MARKUP_RATE)).to.be.a('number');
      expect(om.getOtherMarkup(100, markups.ELECTRONICS_MARKUP_RATE)).to.equal(2);
      expect(om.getOtherMarkup(100.99, markups.ELECTRONICS_MARKUP_RATE)).to.equal(2.02);
    });
  });
});