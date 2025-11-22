// Assignment: Number Type

function checkNumberType(number) {
    if(number>0){
        return "Positive number"
    }
    else if (number<0) {
        return "Negative number"
         }
         else{
            return "Zero"
         }
    
}
let num = -5
console.log("The number is:", checkNumberType(num));