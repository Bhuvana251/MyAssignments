//Assignment: Odd or Even 

function isOddOrEven(number) {

    if (number %2===0) {
        return "Even"
        
    } else {
        return "Odd"
    }    
}

let number = 17
console.log ("Given number is : " ,  isOddOrEven(number))