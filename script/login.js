document.getElementById("btn-id").addEventListener("click", function(){
    //getting the phone number
    const numberInput = document.getElementById("number-input");
    const phoneNumber = numberInput.value;

    //getting the pin number
    const pinInput = document.getElementById("pin-input");
    const pinNumber = pinInput.value;

    //phone and pin number matching
    if(phoneNumber === "01234567890" && pinNumber === "1234"){
        //if matched send to home page
        alert("login Successful");
        window.location.assign("home.html");
    }
    else{
        //else alert login failed
        alert("Login Failed");
        return;
    }
})