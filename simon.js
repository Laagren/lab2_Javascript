var myForm = document.getElementById("mainForm");
var submitBtn = document.getElementById("submitBtn");
var requiredFields = document.getElementsByClassName("required");
var stars = document.getElementsByName("star");
var infoFilled = false;
var numRequiredInputs = 5;
var correctAnswers = 0;
var numQuestions = 5;
var allowedChars = /^[a-zA-Z]+$/;

// Personal info variables
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var email = document.getElementById("email");
const names = [ fName, lName];


document.addEventListener('DOMContentLoaded', function(){
    submitBtn.disabled = true;
})


myForm.addEventListener("submit", function(event){
    event.preventDefault();  
    
    // Check first and last name for only letters.
    try
    {    
        if(ValidateNames() && ValidateEmail())
        {
            console.log("Submit");
            alert(correctAnswers+"/"+numQuestions + " answers correct!");
            myForm.reset();
            location.reload();
        }    
    }
    catch(error)
    {
        alert("Failed to validate input: " + error);
    }   
});

function ValidateEmail()
{
    return true;
}

function ValidateNames()
{
    let shouldAlert = false;   
    names.forEach(name => {
        if(!allowedChars.test(name.value))
        {
            shouldAlert = true;
            name.style.backgroundColor = "rgba(255, 0, 0, 0.15)";
        }
        else{
            name.style.backgroundColor = "white";
        }     
    });

    if(shouldAlert)
    {
        alert("Warning: Name field(s) contain non letter characters.");
        return false;
    } 
    return true;
}
// Check if all required are filled.
// If filled, enable submit button.
myForm.addEventListener("change", function(){
    let fillCounter = 0;
    for(let i = 0; i < requiredFields.length; i++)
    {     
        var input = requiredFields[i];
        
        if((input.type === 'radio' && input.checked)
            || (input.type=== "text" && input.value.length > 0)
            || (input.type === "email" && input.value.length > 0))
        {
            console.log("Type: " + input.type + ", value: " + input.value + " filled");
            //stars[i].style.color = "green";
            fillCounter++;
        }
    }

    console.log(fillCounter);
    if(fillCounter === numRequiredInputs)
    {
        submitBtn.disabled = false;
    }
    else submitBtn.disabled = true;
});