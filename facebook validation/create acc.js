function formValidate(){
var firstName = document.getElementById("fname").value ;
var lastName = document.getElementById("lname").value ;
var Email = document.getElementById("email").value ;
var Password = document.getElementById("password").value ;
var Error = document.getElementById("error");
var Text = "";
if (firstName.length < 3 ) {
    Text= "Please enter valid Name";
    Error.innerHTML= Text;
    return false;
}
else if(lastName.length < 3 ) {
    Text= "Please enter valid Name";
    Error.innerHTML= Text;
    return false;
}
else if(Email.indexOf ("@")== -1){
    Text= "Please enter valid Email";
    Error.innerHTML= Text;
    return false; 
}
else if(Password.length < 4) {
    Text= "Please enter valid Password";
    Error.innerHTML= Text;
    return false;
}
else {alert("Done")}
return true;
}