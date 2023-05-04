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

// console.log(ejer1(nums,target))





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

// console.log(ejer2(l1,l2));



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

// console.log(ejer3(input))



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

// console.log(ejer4(numeronormal))


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
// console.log(ejer5())
 
//exercise 6

// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and 7
// remove the letter at that index from word so that the frequency of every letter present in word is equal.
// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

// Note:

// The frequency of a letter x is the number of times it occurs in the string.
// You must remove exactly one letter and cannot chose to do nothing.
 

// Example 1:

// Input: word = "abcc"
// Output: true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
// Example 2:

// Input: word = "aazz"
// Output: false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z"
// is 2, or vice versa. It is impossible to make all present letters have equal frequency.


const ejer6=(word:string):boolean=>{
    let result:boolean=true;
   const contador:[string, number][]=[]
   let contarFrequencia:number=0
   word.split('').map((w:string)=>{
        const encontrar= contador.findIndex(([k,v])=> k===w )
      
        if (encontrar===-1) {
            contador.push([w,1])
        }else{
            contador[encontrar]=[contador[encontrar][0],contador[encontrar][1]+1]
        }
    })
    contador.map((c:[string,number])=>{
        if (c[1]>2) {
            result=false
        }
        if (c[1]==2) {
            contarFrequencia+=1
        }
    })
    if (contarFrequencia>1) {
        result=false
    }
    
    
     return result
}

console.log(ejer6('abcc'))