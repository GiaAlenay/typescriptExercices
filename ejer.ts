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

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


const l1:number [] = [2,4,3]
const l2 :number[]= [5,6,4]

//Output: [7,0,8]

const ejer2=(l1:number[],l2:number[]):number[]=>{
    const newArray= (parseInt(l1.reverse().join(''))+parseInt(l2.reverse().join(''))).toString().split('').reverse()
    return newArray.map(n=>{return parseInt(n)})
}

console.log(ejer2(l1,l2))

;