// 1. Given an array. Determine whether it consists only from unique elements or not.




let array = [1, 2, 3, 4, 5, 6, 7, "a"]


function unique(arr) {

    let set = new Set()

    let length = arr.length

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }

    if (set.size === length) {
        return true
    } else return false
}

console.log(unique(array))





// 2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.

let array = [9, 4, 16] 


function even(arr) {
    let myArr = []

    arr.filter(function (el) {
        if (Math.sqrt(el) % 2 === 0) {
            myArr.push(el)
        }
    })
    return myArr.reduce((acc, curr) => acc + curr, 0)

}
console.log(even(array))



// 3. Check whether string is palindrome, or not.



let string = "A man, a plan, a canal. Panama"


function palindrome(str) {

    let regEx = /[^A-Za-z0–9]/g
    let lowRegStr = str.toLowerCase().replace(regEx, '')
    let myStr = lowRegStr.split('')
    let end = myStr.length - 1
    let start = 0
    let length = myStr.length - 1

    while (length > 0) {
        if (myStr[start] === myStr[end]) {
            start++
            end--
        } else return false
        length--
    }
    return true
}

console.log(palindrome(string))




// 4. Given a word and a list of possible anagrams, select the correct sublist.


let array = ["enlists", "google", "inlets", "banana", ]
let string = "listen" // ["inlets"]


let array1 = ["licnep", "circular", "pupil", "nilcpe", "leppnec"]
let string1 = "pencil" // ["licnep" , "nilcpe"]



function sublist(arr, str) {
    let myArr = []
    for (let i = 0; i < arr.length; i++) {
        if (compare(arr[i], str)) {
            myArr.push(arr[i])
        }
    }
    return myArr
}

function compare(str, str1) {

    if (str.length !== str1.length) {
        return false
    }

    function fN(a, b) {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        if (a === b) {
            return 0
        }
    }

    str = str.split('').sort(fN)
    str1 = str1.split('').sort(fN)

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str1[i]) {
            continue;
        } else return false
    }
    return true
}

console.log(sublist(array, string))
console.log(sublist(array1, string1))
