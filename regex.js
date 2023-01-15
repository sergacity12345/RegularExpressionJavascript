// here we store our credit card in this variable for future use
// it can be Visa or Master card
let creditCardNumber = 4187451809131299


// we write a function to check if the number we added is either Visa or Master card
function UseRegexToCheckCreditCard(ccNumber){
    // we write a pattern for both Visa and Master card to look for in the number we passed into the function
    let visaReg = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
    let masterReg = /^(?:5[1-5][0-9]{14}?)$/
    // we write a condition to check if the pattern match the parameter we passed into the function
    if(visaReg.test(ccNumber)){
        // if it matched then we print :'You inputed a Visa card', else we go to the next condition
        console.log( ' You inputed a Visa card')
    }else if(masterReg.test(ccNumber)){
        console.log("You inputed a Master card")
    }else{
    
        // if we reach here , it means the pattern does not match any of the card details
        console.log(`${ccNumber} not a valid card`)
    }

}

UseRegexToCheckCreditCard(creditCardNumber)