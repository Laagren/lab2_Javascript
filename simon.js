var myForm = document.getElementById("mainForm");
var infoBoxes = document.getElementsByName("info");
var submitBtn = document.getElementById("submitBtn");
var infoFilled = false;


// Personal info variables
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var email = document.getElementById("email");
var fNameStar = document.getElementById("fNameStar");
var lNameStar = document.getElementById("lNameStar");
var emailStar = document.getElementById("emailStar");

const requiredFields = [fName, lName, email];

myForm.addEventListener("submit", function(event){
    event.preventDefault();
    //alert("Please fill all the required fields to submit answer");
});


// Required input fields.
// Check if they are empty or not.
/*fName.addEventListener("keyup", function(){
    infoKeyDownCheck(fName, fNameStar);
});

lName.addEventListener("keyup", function(){
    infoKeyDownCheck(lName, lNameStar);
});

email.addEventListener("keyup", function(){
    infoKeyDownCheck(email, emailStar);
});*/





/*let amountFilled = 0;
for(let i = 0; i < infoFields.length; i++)
{
    let length = infoFields[i].length;
    console.log("Value of info box["+ i + "]: " + length);

    if(length > 0)
    {
        star.style.color = "green";
        amountFilled++;
    }
    else
    {
        star.style.color = "red";
    }
}

console.log("Amount infofields filled: " + amountFilled);
if(amountFilled === infoFields.length)
{
    infoFilled = true;
}*/








/*function infoKeyDownCheck(infoBox, star)
{
    let length = infoBox.value.length;
    console.log("Value of current info box: " + length);

    if(length > 0)
    {
        star.style.color = "green";
    }
    else
    {
        star.style.color = "red";
    }
}*/