function formValidate(){
    var Name = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    var Phone = document.getElementById("phone").value;
    var Error = document.getElementById("error");
    var Text = "";
    if(Name.length < 3) {
        Text = "Please enter valid Username";
        Error.innerHTML = Text;
        return false;
    }
    else if(Email.indexOf("@") == -1 ){
        Text = "Please enter valid Email";
        Error.innerHTML = Text;
        return false;
    }
    else if(isNaN(Phone)){
        Text = "Please enter valid Phone";
        Error.innerHTML = Text;
        return false;
    }
    else { alert ("Done")
    return true;}


}
console.log()