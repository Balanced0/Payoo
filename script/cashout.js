document.getElementById("cashout-btn").addEventListener("click", function(){
    const agentInput = document.getElementById("agent-number-input");
    const agentNumber = agentInput.value;

    const withdrawAmountInput = document.getElementById("cashout-amount-input");
    const withdrawAmount = withdrawAmountInput.value;

    const pinInput = document.getElementById("cashout-pin-input");
    const pin = pinInput.value;

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