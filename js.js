var balance = -10.00;
var checkBalance = true;
var isActive = false;

if (checkBalance){
    if (isActive && balance > 0){
        console.log("Your balance is $"+ balance.toFixed(2) +".");
    }
    else if (isActive && balance === 0){
        console.log("Your account is empty.");
    }
    else if (isActive && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    else {
        console.log("Your account is no longer active.");
    }

}
    else {
        console.log("Thank you. Have a nice day!");
    } 