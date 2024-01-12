var array=[];
var userfirstname =document.getElementById(inputfirstname);
var userlastname =document.getElementById(inputlastname);
var useremail =document.getElementById(inputEmail);
var userpassword =document.getElementById(inputPassword);
var userrepassword =document.getElementById(inputreenterpassword);
var userphonenumber=document.getElementById(inputphonenumber);
console.log(userpassword,userrepassword)
var userdata = { };
var mailid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var passid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var fnameid = /^([a-zA-Z ]){2,30}$/; 
var lnameid = /^([a-zA-Z ]){2,30}$/;
var contactid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
function getfname(event){
    if(fnameid.test(event.target.value)==true){
    userdata["fname"]=event.target.value;}
    else if(fnameid.test(event.target.value)==false){
          
    }
}
function getlname(event){
    if(lnameid.test(event.target.value)){
    userdata["lname"]=event.target.value;}
    
}
function getemail(event){
    if(mailid.test(event.target.value)){
    userdata["email"]=event.target.value;}
    
}
function getpassword(event){
    if(passid.test(event.target.value)){
    userdata["password"]=event.target.value;}
    
}
function getrepassword(event){
    userrepassword=event.target.value;
}
function getphonenumber(event){
    if(contactid.test(event.target.value)){
    userdata["phonenumber"]=event.target.value;}
    
}
function enter(){
    if(userdata.length != 0){
        array.push(userdata);
        inputfirstname.value="";
        inputlastname.value="";
        inputEmail.value="";
        inputPassword.value="";
        inputreenterpassword.value="";
        inputphonenumber.value="";
        userdata={};
    }
    console.log(array);
   localStorage.setItem("datas",JSON.stringify(array));
var get =localStorage.getItem("datas");
console.log(JSON.parse(get));
}
