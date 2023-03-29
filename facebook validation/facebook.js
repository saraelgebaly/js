function formValidate(){
var Email = document.getElementById("email").value;
var Password = document.getElementById ("password").value;
var Error = document.getElementById("error");
var Text = "";
if(Email.indexOf("@") == -1){
Text= "Please enter valid Email";
Error.innerHTML = Text;
return false;
}
else if(Password.length < 5){
    Text= "Please enter valid Password";
Error.innerHTML = Text;
return false;
}
else {alert("Done")}
 return true;

}