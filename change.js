const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const buttonCheck=document.querySelector("#btn");
const errorMessage=document.querySelector("#error-message");


buttonCheck.addEventListener("click", function ValidateBillandCashAmount(){
    
    if(billAmount.value > 0)
    {
        if(billAmount.value<=cashGiven.value)
        {
            
        }
        else{
            showMessage("Do you wanna wash plates!");
        }
    }
    else{
        showMessage("Invalid Bill Amount! Please enter valid amount");
    }
});

function showMessage(msg)
{
    errorMessage.innerText =msg;
}