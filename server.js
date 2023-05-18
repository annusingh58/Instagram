function Signup(event){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("confimpassword").value;

    if(name && email && password && cpassword){
        if(password.length>=8 && cpassword.length>=8){
            if(password==cpassword){
                var ls=JSON.parse(localStorage.getItem("instausers")) || [];
                var flag=false;
                for(var i=0;i<ls.length;i++){
                    if(ls[i].uemail==email){
                        flag=true;

                    }

                }
                if(flag==true){
                    alert("email exist enter new email");
                }
                else{
                    var insta={uname:name,uemail:email,upassword:password,ucpassword:cpassword};
                    ls.push(insta);
                    localStorage.setItem("instausers",JSON.stringify(ls));
                    alert("sign up successfully");

                    window.location.href=`./login.html`
                }

            }
            else{
                console.log("password not matched");
            }

        }

    

    else{
        console.log("password should  be more then  8 digit");
    }
}
    else{
        console.log("all field are required");
    }

}
function login(event){
    event.preventDefault();
    var email=document.getElementById("lemail").value;
    var pass=document.getElementById("lpassword").value;
    var insta_currentuser;
    if(email && pass){
        var iarray=JSON.parse(localStorage.getItem("instausers"));
        console.log(iarray,"array herre");
        var flag=flse;
        for(var i=0;i<iarray.length;i++){
            if(iarray[i].uemail==email){
                flag=true;
                insta_currentuser=iarray[i];
            }
        }
        if(flag==true){
            localStorage.setItem("insta_currentuser",JSON.stringify(insta_currentuser));
            alert("login successfully");
            window.location.href="./home.html";
        }
    }
    else{
        console.log("both fields are required");
    }
}