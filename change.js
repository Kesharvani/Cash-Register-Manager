const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const buttonCheck=document.querySelector("#btn");
const errorMessage=document.querySelector("#error-message");
const notesElement=document.querySelectorAll(".nts");

const notes = [2000 , 500 , 100 , 20 , 10 , 5 , 1];

buttonCheck.addEventListener("click", function ValidateBillandCashAmount() {
    
    hidmessage();
    clearTable();
    if (Number(billAmount.value) > 0){

        if (Number(cashGiven.value) > Number(billAmount.value))
        {
            const toBeReturnAmount = cashGiven.value - billAmount.value;
           exchangeMoney(toBeReturnAmount);
        } 
        else {
            showMessage("Do you wanna wash plates!");
        }
    }
    else {
        showMessage("Invalid Bill Amount! Please enter valid amount");
    }
});



function exchangeMoney(toBeReturnAmount)
{
    for(let i = 0; i < notes.length; i++)
    {
       const temp=Math.trunc(toBeReturnAmount/notes[i]);
        toBeReturnAmount= toBeReturnAmount%notes[i];
        notesElement[i].innerText=temp;
    }
}

function showMessage(msg)
{
    errorMessage.style.display="block";
    errorMessage.innerText =msg;
}

function hidmessage()
{
    errorMessage.style.display="none";
}

function clearTable()
{
    for(let j=0;j<notes.length;j++)
    {
        notesElement[j].innerText="";
    }
}