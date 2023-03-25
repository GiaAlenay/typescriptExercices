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