let submitButton=document.getElementById("Submit")

submitButton.addEventListener('click',function(e){
    e.preventDefault(); //stop default submittion of data to browser

    let firstName=document.getElementById("Firstname")
    let lastName=document.getElementById("Lastname")
    let mobileNumber=document.getElementById("Mobilenumber")
    let Email=document.getElementById("Email")
    

    validateTheForm(firstName,lastName,mobileNumber,Email)
    

})
function validateEmail(email) {
    // Regular expression for validating email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateTheForm(firstName,lastName,mobileNumber,Email){
    if(firstName.value == "" ){
        var firstNameErr=document.getElementById("FirstnameErr")
        firstNameErr.innerText="please enter your first name"
        firstNameErr.style.color="red"
    }
    else{
        firstNameErr.innerText=""
    }
    if(lastName.value == "" ){
        var LastnameErr=document.getElementById("LastnameErr")
        LastnameErr.innerText="please enter your last name"
        LastnameErr.style.color="red"
    }
    else{
        LastnameErr.innerText=""
    }

    if(Email.value==""){
        var EmailErr=document.getElementById("EmailErr")
        EmailErr.innerText="please enter your valid email"
        EmailErr.style.color="red"
    }
    else if (!validateEmail(Email.value)) {
        var EmailErr = document.getElementById("EmailErr");
        EmailErr.innerText = "Please enter a valid email";
        EmailErr.style.color = "orange";
    }
    else{
        EmailErr.innerText=""
    }

    if(mobileNumber.value==""){
        var MobilenumberErr=document.getElementById("MobilenumberErr")
        MobilenumberErr.innerText="please enter your mobile number"
        MobilenumberErr.style.color="red"
    }
    else if(mobileNumber.value.length!=10 || !['7', '8', '9'].includes(mobileNumber.value.charAt(0))){
        var MobilenumberErr=document.getElementById("MobilenumberErr")
        MobilenumberErr.innerText="Please check your phone number"
        MobilenumberErr.style.color="orange"
    }
    else{
        MobilenumberErr.innerText=""
    }
}