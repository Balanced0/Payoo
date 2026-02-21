document.getElementById("cashout-btn").addEventListener("click", function(){
    const agentNumber = getValueFromInput("agent-number-input");
    const withdrawAmount = getValueFromInput("cashout-amount-input");
    const pin = getValueFromInput("cashout-pin-input");

    if(agentNumber.length < 11 || agentNumber.length > 11){
        alert("Invalid Agent Number");
        return;
    }
    
    const currentBalanceInput = document.getElementById("balance");
    const currentBalance = currentBalanceInput.innerText;

    const newBalance = Number(currentBalance) - Number(withdrawAmount);
    
    if(newBalance < 0){
        alert("You are too poor to withdraw that much");
        return;
    }
    if(pin === "1234"){
        currentBalanceInput.innerText = newBalance;
    }
    else{
        alert("Invalid Pin");
        return;
    }
});