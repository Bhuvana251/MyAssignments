// Assignment: var vs let vs const 

const browserVersion="Chrome"

/* function getBrowserVersion() {
    if (browserVersion==="Chrome") {
        var browserVersion = "Chrome - using var";
        console.log("Inside the block :", browserVersion);        
    }
    console.log("Outside the block :", browserVersion);    
}
getBrowserVersion();
console.log("Browser Version :", browserVersion); */

function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        let browserVersion = "Chrome - using let";
        console.log("Inside the block :", browserVersion);
    }
    console.log("Outside the block :", browserVersion);
}
getBrowserVersion();
console.log("Browser Version :", browserVersion);