var array = [];
var useremail=document.getElementById(inputemail);
var userpassword=document.getElementById(inputpassword);
var userdata={};
var mailvalid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var passvalid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
function getemail(event){
    if(mailvalid.test(event.target.value)==true){
    userdata["email"]=event.target.value;
}    
}
function getpassword(event){
    if(passvalid.test(event.target.value)==true){
    userdata["password"]=event.target.value;}
}
function sub(){
    if(userdata!=0){
    array.push(userdata);
    inputemail.value="";
    inputpassword.value="";
    userdata={};   
} 
    console.log(array);
    sessionStorage.setItem("datas",JSON.stringify(array));
    var get =sessionStorage.getItem("datas");
    console.log(JSON.parse(get));
}
