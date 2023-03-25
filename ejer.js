"use strict";
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
const nums = [2, 7, 11, 15];
const target = 9;
const ejer1 = (nums, tagert) => {
    const result = [];
    nums.map((n) => {
        nums.map((n1) => {
            if (n !== n1 && n + n1 === tagert) {
                result.push(n);
            }
        });
    });
    return result;
};
console.log(ejer1(nums, target));
