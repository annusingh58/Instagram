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
 
            
                 var ls= JSON.parse(localStorage.getItem("InstaUsers")) || []   
                 var flag=false;
                 for(i=0;i<ls.length;i++){
                     if(ls[i].uemail==email){
                         flag=true;
                     }
 
                 }
                 if(flag==false){
                 var userdata ={uname :name,uemail:email,upassword:password,uconfimpassword:confimpassword}
                 ls.push(userdata);
                 console.log(ls);
                 localStorage.setItem("InstaUsers",JSON.stringify(ls))
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
 
     var CurrentUser={};
     if(lemail && lpassword){
         var ls=JSON.parse(localStorage.getItem("InstaUsers"))
         var flag =false;
         for(var i=0;i<ls.length;i++){
             if(ls[i].uemail==lemail){
                 flag=true;
                 CurrentUser=ls[i];
             }
 
            
         }
              if( flag==true){
                 localStorage.setItem("InstaCurrentUser",JSON.stringify(CurrentUser))
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
 