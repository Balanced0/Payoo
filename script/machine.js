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
function showOnly(id){
    const addMoney = document.getElementById("addMoney");
    const cashout = document.getElementById("cashout");
    const history = document.getElementById("history");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}