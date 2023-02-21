function validateMail(){
	var mailid=document.getElementById("mail");
	var result=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(mailid.value.match(result))
	{
		alert("Valid email address!");
	}
	else
	{
		alert("Invalid email address!");
	}
}
function validateName(){
	var name=document.getElementById("name");
	var result= /^[A-Za-z]+$/;
	if(name.value.match(result))
	{
		alert("Valid Name!");
	}
	else
	{
		alert("Invalid Name!");
	}
}
function validatePassword(){
	var password=document.getElementById("password");
	var result=/^[a-zA-Z0-9!@#$%^&*]{7,12}$/;
	if(password.value.match(result))
	{
		alert("Strong password!");
	}
	else
	{
		alert("Weak password!");
	}
}