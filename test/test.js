(function() {
  'use strict';
  var maxmin_fun = require("../app/min_max/minmax.js");
  var fizbuz = require("../app/fizz_buzz/fizzbuzz.js");

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

    });         

  });

})();