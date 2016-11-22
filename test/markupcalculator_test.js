"use strict";

var chai = require('chai');
var expect = chai.expect;

var MarkupCalculator = require('../calculator/markupcalculator.js');

describe('MarkupCalculator', function() {
  var mc = new MarkupCalculator();

  var markups = {
    FLAT_MARKUP_RATE: 0.05,
    LABOR_MARKUP_RATE: 0.012,
    PHARM_MARKUP_RATE: 0.075,
    FOOD_MARKUP_RATE: 0.13,
    ELECTRONICS_MARKUP_RATE: 0.02
  };

  describe('#getFlatBase()', function() {
    it('should return the price with base and flat markup', function() {
      expect(mc.getFlatBase(100, markups.FLAT_MARKUP_RATE)).to.be.a('number');
      expect(mc.getFlatBase(100, markups.FLAT_MARKUP_RATE)).to.equal(105);
      expect(mc.getFlatBase(100.11, markups.FLAT_MARKUP_RATE)).to.equal(105.1155);
    });
  });

  describe('#getLaborMarkup()', function() {
    it('should return the markup based on labor markup rate and number of people', function() {
      expect(mc.getLaborMarkup(100, markups.LABOR_MARKUP_RATE, 1)).to.be.a('number');
      expect(mc.getLaborMarkup(100, markups.LABOR_MARKUP_RATE, 1)).to.equal(1.2);
      expect(mc.getLaborMarkup(100, markups.LABOR_MARKUP_RATE, 3)).to.equal(3.5999999999999996);
    });
  });

  describe('#getOtherMarkup()', function() {
    it('should return the markup based on pharmaceuticals markup rate', function() {
      expect(mc.getOtherMarkup(100, markups.PHARM_MARKUP_RATE)).to.be.a('number');
      expect(mc.getOtherMarkup(100, markups.PHARM_MARKUP_RATE)).to.equal(7.5);
      expect(mc.getOtherMarkup(100.11, markups.PHARM_MARKUP_RATE)).to.equal(7.508249999999999);
    });
  });

  describe('#getOtherMarkup()', function() {
    it('should return the markup based on food markup rate', function() {
      expect(mc.getOtherMarkup(100, markups.FOOD_MARKUP_RATE)).to.be.a('number');
      expect(mc.getOtherMarkup(100, markups.FOOD_MARKUP_RATE)).to.equal(13);
      expect(mc.getOtherMarkup(100.11, markups.FOOD_MARKUP_RATE)).to.equal(13.0143);
    });
  });

  describe('#getOtherMarkup()', function() {
    it('should return the markup based on electronics markup rate', function() {
      expect(mc.getOtherMarkup(100, markups.ELECTRONICS_MARKUP_RATE)).to.be.a('number');
      expect(mc.getOtherMarkup(100, markups.ELECTRONICS_MARKUP_RATE)).to.equal(2);
      expect(mc.getOtherMarkup(100.99, markups.ELECTRONICS_MARKUP_RATE)).to.equal(2.0198);
    });
  });
});