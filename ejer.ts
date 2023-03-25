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