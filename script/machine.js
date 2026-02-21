function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}
function getBalance(){
    const currentBalanceInput = document.getElementById("balance");
    const currentBalance = currentBalanceInput.innerText;
    return Number(currentBalance);
}
function setBalance(value){
    document.getElementById("balance").innerText = value;
}