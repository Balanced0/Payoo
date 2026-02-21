document.getElementById("add-money-btn").addEventListener("click", function(){
    const bank = getValueFromInput("addMoney-Bank");
    if(bank === "Select Bank"){
        alert("Bank not selected");
        return;
    }
    const accountNumber = getValueFromInput("account-number-input");
    if(accountNumber.length != 11){
        alert("Invalid Account Number");
        return;
    }
    const addAmount = getValueFromInput("add-amount-input");
    const newAmount = getBalance() + Number(addAmount);
    const pin = getValueFromInput("add-pin-input");
    if(pin === "1234"){
        alert(`Add Money Success from ${bank} at ${new Date()}`);
        setBalance(newAmount);
        return;
    }
    else{
        alert("Invalid Pin");
        return;
    }
});
