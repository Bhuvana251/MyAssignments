function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome");
    } else {
        console.log("Launching Default");
    }
}

function runningTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Smoke Test");
            break;

        case "sanity":
            console.log("Sanity Test");
            break;

        case "regression":
            console.log("Regression Test");
            break;

        default:
            console.log("default");
    }
}


launchBrowser("chrome");      
launchBrowser("firefox");      

runningTests("smoke");            
runningTests("sanity");        
runningTests("regression");       
runningTests("performance");