function generateotp(){
    let generateotp = Math.floor(1000+Math.random()*9000);
    console.log(generateotp);
    window.localStorage.setItem("otp",generateotp);
}
function success(){
    let ValidOTP = document.getElementById("ValidOTP").value;
     let otp = window.localStorage.getItem("otp");

    if(ValidOTP == otp){
        alert("valid OTP");
    }else{
        alert("Invild OTP");
    }
}