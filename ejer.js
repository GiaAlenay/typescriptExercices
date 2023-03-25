"use strict";
//exercise 1
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
//exercise 2
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
//Output: [7,0,8]
const ejer2 = (l1, l2) => {
    const newArray = (parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''))).toString().split('').reverse();
    return newArray.map(n => { return parseInt(n); });
};
console.log(ejer2(l1, l2));
//exercise 3
//Given an integer x, return true if x is a palindrome, and false otherwise.
const input = 1214;
const ejer3 = (input) => {
    const newArray = input.toString().split('');
    if (newArray.reverse().join('') === input.toString()) {
        return true;
    }
    else {
        return false;
    }
};
console.log(ejer3(input));
