//exercise 1

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const nums:number[] = [2,7,11,15]
const target:number = 9

const ejer1=(nums:number[],tagert:number):number[]=>{
    const result:number[]=[]

    nums.map((n:number)=>{
        nums.map((n1:number)=>{
            if (n!==n1 && n+n1===tagert ) {
                result.push(n)
            }
        })
    })

    return result
}

console.log(ejer1(nums,target))





//exercise 2

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
//Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


const l1:number [] = [2,4,3]
const l2 :number[]= [5,6,4]

//Output: [7,0,8]

const ejer2=(l1:number[],l2:number[]):number[]=>{
    const newArray= (parseInt(l1.reverse().join(''))+parseInt(l2.reverse().join(''))).toString().split('').reverse()
    return newArray.map(n=>{return parseInt(n)})
}

console.log(ejer2(l1,l2));



//exercise 3

//Given an integer x, return true if x is a palindrome, and false otherwise.

const input:number = 1214

const ejer3=(input:number):boolean=>{
    const newArray= input.toString().split('')

    if (newArray.reverse().join('')===input.toString()) {
        return true
    }else{
        return false
    }
}

console.log(ejer3(input))



//exercise 4
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const numeronormal:number=12

const ejer4=(num:number):string=>{
    const romanian:string[]=num.toString().split('').map((n,i)=>{
        const nuco:number=parseInt(n)*(10**(num.toString().length-(i+1)))
        switch (true) {
            case (nuco>=1000):
                return 'M'
            case (nuco===900):
                return 'CM'
            case  (nuco>=500):
                return 'D'
            case (nuco===400):
                return 'CD'   
            case (nuco>=100):
                return 'C'
             case (nuco===90):
                return 'XC'
            case  (nuco>=50):
                return 'L'
            case (nuco===40):
                return 'XL'
            case (nuco>=10):
                return 'X'
            case (nuco===9):
                return 'IX'
            case  (nuco>=5):
                return 'V'
            case (nuco===4):
                return 'IV'
            
            default:
                let rep:string=''
                while (rep.length<nuco) {
                    rep=rep+'I'
                }
                return rep
        }   

    })
    return romanian.join('')
}

console.log(ejer4(numeronormal))


//exercise 5

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations 
//of candidates where the chosen numbers sum to target. You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency of at least one of the chosen numbers is different.
// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 
//combinations for the given input.

const candidates:number[] = [2,3,6,7]
const target5:number = 7

const ejer5=():number[][]=>{
    candidates.map((c,i)=>{
        while (candidates.length>i  ) {
            
        }
    })
return [[1,2],[4,5]]
}
console.log(ejer5())
 

//ejer 6

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.






//exercise 7
// 27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.




//exercise 8

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
//  or -1 if needle is not part of haystack.