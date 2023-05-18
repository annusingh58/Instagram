function signup(event){
    event.preventDefault();
    alert("working");
 
 
    var name =document.getElementById("iname").value;
    var email =document.getElementById("iemail").value;
    var password=document.getElementById("ipassword").value;
    var confimpassword=document.getElementById("iconfimpassword").value;
 
    if( name && email && password && confimpassword){
     if(password.length>=8 && confimpassword.length>=8){
         if(password==confimpassword){
 
            
                 var ins= JSON.parse(localStorage.getItem("UserData")) || []   
                 var flag=false;
                 for(i=0;i<ins.length;i++){
                     if(ins[i].uemail==email){
                         flag=true;
                     }
 
                 }
                 if(flag==false){
                 var data ={uname :name,uemail:email,upassword:password,uconfimpassword:confimpassword}
                 ins.push(data);
                 console.log(ins);
                 localStorage.setItem("UserData",JSON.stringify(ins))
                 window.location.href="./login.html"
 
                 }
                 else{
                     alert("email already exits")
                 }
 
             }
             else{
                 console.log("password not match");
             }
 
         }
 
         else{
             console.log("password should be 8 digit");
            
         }
 
 
    }
    else{
      console.log("all field are required")
    }
 
 
 
 
 }
 
 function login(event){
     event.preventDefault();
     // alert("working");
 
 
     var lemail=document.getElementById("lemail").value;
     var lpassword=document.getElementById("lpassword").value;
 
     var loginuser={};
     if(lemail && lpassword){
         var ins=JSON.parse(localStorage.getItem("UserData"))
         var flag =false;
         for(var i=0;i<ins.length;i++){
             if(ins[i].uemail==lemail){
                 flag=true;
                 loginuser=ins[i];
             }
 
            
         }
              if( flag==true){
                 localStorage.setItem("CurrentUser",JSON.stringify(loginuser))
                 alert("login successfull")
                 window.location.href="./homepage.html"
                 
 
         }
         
 
 
         else{
             alert("caredential are match")
         }
 
 
     }
     else{
         alert("all field are required")
     }
 
 }
 