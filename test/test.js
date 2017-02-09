(function() {
  'use strict';
  var maxmin_fun = require("../app/min_max/minmax.js");
  var fizbuz = require("../app/fizz_buzz/fizzbuzz.js");
  var geo = require("../app/arit_geo/arit.js");

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        var answer = maxmin_fun.findMinMax([1, 2, 3, 4]);
        expect(answer).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        var answer = maxmin_fun.findMinMax([6, 4]);
        expect(answer).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        var answer = maxmin_fun.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2]);
        expect(answer).toEqual([2, 78]);
      });

      it('should return [2, 7] for [2, 3, 3, 3, 7, 7, 5, 4, 4]', function () {
        var answer = maxmin_fun.findMinMax([2, 3, 3, 3, 7, 7, 5, 4, 4]);
        expect(answer).toEqual([2, 7]);
      });      

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        var answer = maxmin_fun.findMinMax([4, 4, 4, 4]);
        expect(answer).toEqual([4]);
      });

      it('should return [1] for [1]', function () {
        var answer = maxmin_fun.findMinMax([1]);
        expect(answer).toEqual([1]);
      });      

    });

    describe('Return [NaN, NaN] in a new list when none number is in that list', function () {

      it('should return [NaN, NaN] for [4, 5, "ben", 4]', function () {
        var answer = maxmin_fun.findMinMax([4, 5, "ben", 4]);
        expect(answer).toEqual([NaN, NaN]);
      });

      it('should return [NaN, NaN] for ["sun"]', function () {
        var answer = maxmin_fun.findMinMax(["sun"]);
        expect(answer).toEqual([NaN, NaN]);
      });      

    }); 

    describe('Return ["Not an array"] in a new list when supplied without an array', function () {

      it('should return ["Not an array"] for 1', function () {
        var answer = maxmin_fun.findMinMax(1);
        expect(answer).toEqual(["Not an array"]);
      });   

    }); 
    
     describe('Return [Infinity,-Infinity] in a new list when supplied with empty array', function () {

      it('should return [Infinity,-Infinity] for []', function () {
        var answer = maxmin_fun.findMinMax([]);
        expect(answer).toEqual([Infinity,-Infinity]);
      });   

    }); 
    
    describe("Fizz Buzz tests ", function() {

      it("should return `Fizz` for number divisible by 3", function() {
        var answer = fizbuz.fizzBuzz(3);
        expect(answer).toBe('Fizz');
      });

      it("should return `Buzz` for number divisible by 5", function() {
        var answer = fizbuz.fizzBuzz(5);
        expect(answer).toBe('Buzz');
      });

      it("should return `FizzBuzz` for 15", function() {
        var answer = fizbuz.fizzBuzz(15);
        expect(answer).toBe('FizzBuzz');
      });

      it("should return `FizzBuzz` for 45", function() {
        var answer = fizbuz.fizzBuzz(45);
        expect(answer).toBe('FizzBuzz');
      });

      it("should return `FizzBuzz` for 90", function() {
        var answer = fizbuz.fizzBuzz(90);
        expect(answer).toBe('FizzBuzz');
      });

      it("should return `Fizz` for 63", function() {
        var answer = fizbuz.fizzBuzz(63);
        expect(answer).toBe('Fizz');
      });

      it("should return 7 since its indivisible by 3 and 5", function() {
        var answer = fizbuz.fizzBuzz(7);
        expect(answer).toBe(7);
      });

      it("should return 101 since its indivisible by 3 and 5", function() {
        var answer = fizbuz.fizzBuzz(101);
        expect(answer).toBe(101);
      });

      it("should return 'a' since its NaN", function() {
        var answer = fizbuz.fizzBuzz('a');
        expect(answer).toBe('a');
      });

      it("should return -1 since its indivisible by 3 and 5", function() {
        var answer = fizbuz.fizzBuzz(-1);
        expect(answer).toBe(-1);
      });      

    }); 

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        var answer = geo.aritGeo([]);
        expect(answer).toEqual(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        var answer = geo.aritGeo([2, 4, 6, 8, 10]);
        expect(answer).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        var answer = geo.aritGeo([5, 11, 17, 23, 29, 35, 41]);
        expect(answer).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        var answer = geo.aritGeo([15, 10, 5, 0, -5, -10]);
        expect(answer).toEqual('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        var answer = geo.aritGeo([2, 6, 18, 54, 162]);
        expect(answer).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        var answer = geo.aritGeo([0.5, 3.5, 24.5, 171.5]);
        expect(answer).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        var answer = geo.aritGeo([-128, 64, -32, 16, -8]);
        expect(answer).toEqual('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        var answer = geo.aritGeo([1, 2, 3, 5, 8]);
        expect(answer).toEqual(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        var answer = geo.aritGeo([1, 3, 6, 10, 15]);
        expect(answer).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        var answer = geo.aritGeo([1, 8, 27, 64, 125]);
        expect(answer).toEqual(-1);
      });
      
    });            

  });

})();