//#region Variables
var requiredFields = document.getElementsByClassName("required");
var questions = document.getElementsByClassName("ques")
var submitBtn = document.getElementById("submitBtn");
var mainForm = document.getElementById("mainForm");
var stars = document.getElementsByName("star");
var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var email = document.getElementById("email");

// Questions & Answers
var question1 = document.getElementsByName("question1");
var question2 = document.getElementsByName("question2");
var question3 = document.getElementsByName("question3");
var question4 = document.getElementById("q4");
var question5 = document.getElementsByName("question5");


var questions = [question1, question2, question3, question4, question5];
var ans = [];
var answers = ["2", "||u||·||v||cos(θ)", "300000000","F", "Fs"];
const names = [fName, lName];

// Settings
var allowedChars = /^[a-zA-Z]+$/;
var numRequiredInputs = 5;
var infoFilled = false;
var correctAnswers = 0;
var numQuestions = 5;

//#endregion






//#region Events
// Disable submit button at load of page.
document.addEventListener('DOMContentLoaded', function(){
    submitBtn.disabled = true;
});

// Check conditions to enable submit button on every change.
mainForm.addEventListener("change", function(){
    CheckRequiredInputs();
});

// Validate input and try to submit.
// Call method to calculate score.
mainForm.addEventListener("submit", function(event){
    event.preventDefault();  
    TrySubmit();
   
});
//#endregion


//#region Methods
function TrySubmit()
{  
    try
    {    
        if(ValidateNames() && ValidateEmail())
        {
            console.log("Submit");
            CalculateScore();
            alert(correctAnswers+"/"+numQuestions + " answers correct!");
            mainForm.reset();
            //location.reload();
        }    
    }
    catch(error)
    {
        alert("Failed to validate input: " + error);
    } 
}



function CalculateScore()
{
    let answerIndex = 0;

    questions.forEach(inputs => 
        {          
            let currentAnswer = "default";

            for(let i = 0; i < inputs.length; i++)
            {
                console.log("Type: " + inputs[i].type + ", Checked: " + inputs[i].checked + ", Value: " + inputs[i].value);

                if(inputs[i].checked)
                {
                    currentAnswer = inputs[i].value;
                }
            }

            if(inputs.type === "text")
            {
                currentAnswer = inputs.value.toUpperCase();
            }

            console.log("current answer: " + currentAnswer + ", Correct: " + answers[answerIndex]);

            if(currentAnswer === answers[answerIndex])
            {
                correctAnswers++;         
            }
            console.log("incrementing answer index");
            answerIndex++;
        });
}

function ValidateEmail()
{
    return true;
}


// Check first and last name for only letters.
// Mark textbox as red if invalid input.
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
function CheckRequiredInputs()
{
    let fillCounter = 0;
    for(let i = 0; i < requiredFields.length; i++)
    {     
        var input = requiredFields[i];
        
        if((input.type === 'radio' && input.checked)
            || (input.type=== "text" && input.value.length > 0)
            || (input.type === "email" && input.value.length > 0))
        {
            //console.log("Type: " + input.type + ", value: " + input.value + " filled");
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
}
//#endregion