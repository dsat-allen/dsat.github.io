

$(document).ready(function(){
    emptyerror = "";
    errornotice = $("#error");
    emptyerror = "";
    emailerror = "";
    passworderror = "";
    mobileerror = "";
    countryerror = "";
    cityerror = "";
    stateerror = "";
$('#email').blur(function() {
  var input = $('#email').val();
  if(input){
       errornotice.fadeOut(1000);
  }
});




    $("#loginForm").submit(function(){
//         alert("12345678");return ;
        var input = $('#email').val();
        var input1 = $('#password').val();
        var emailName=$('#emailName').val();
        var passwordName=$('#passwordName').val();
        var center=$("#center").val();
                document.getElementById('resolution').value=screen.width;
        /*        if (active_centre == 1) {
            var session_name = document.getElementById("session_name1").value;
            if (session_name == 0) {
                $("#error").html("Please select session.");
                errornotice.fadeIn(300);
                $("#session_name1").focus();
                $('#error').fadeOut(7000, function() {
                });
                return false;
            }
        }
                
                if(center=="0" && active_centre==1){
                    $("#error").html("Please select Center");
                    errornotice.fadeIn(300);
                    $('#center').focus();
                    $('#error').fadeOut(7000, function () {});
                    return false;
                }else if(center=="" && active_centre==1){
                    $("#error").html("Center is not activated yet.");
                    errornotice.fadeIn(300);
                    $('#center').focus();
                    $('#error').fadeOut(7000, function () {});
                    return false;
                }else */
                if(trim(input)==""){
                    //alert("Please enter Your Form Id");
                    $("#error").html("Please enter Your Form Id");
                    errornotice.fadeIn(300);
                    $('#email').focus();
                     $('#error').fadeOut(7000, function () {});
                    return false;
                }else if(isFormId(trim(input))){
                    //alert("Please enter valid Form Id");
                    $("#error").html("Please enter valid Form Id");
                    errornotice.fadeIn(300);
                    $('#email').focus();
                    $('#error').fadeOut(7000, function () {});
                    return false;
                }else if(trim(input1) ==""){
                    //alert("Please enter Password")
                    $("#error").html("Please enter Password");
                    errornotice.fadeIn(300);
                    $('#password').focus();
                    $('#error').fadeOut(7000, function () {});
                    return false;
                }else{
                    // var facultywebserviceurl='http://192.168.0.250/GIT/allendsatwebservice2018/api/v1/';
        // var adminurl="http://localhost/dsat/admin";
        var url;
        var urldataadmin = {"publicKey":"","service":"Student","action":"getStudentSession","accessToken":"","parameter":{"enrollment_no":input}};
        var urldata1admin = "data="+JSON.stringify(urldataadmin);
        console.log(urldata1admin);
        $.ajax({
            type: "POST",
            url: webserviceurl,  //Fculty webservice url
            data: urldata1admin,
            async: false,
        error:function(result){
           alert("failure");
        },    
        success: function(result)
       {  
           console.log(result);
           //return false;
           var dataResult=JSON.parse(result);
           if(dataResult.result=="success" && dataResult.data.session.length>0){
               var allSessionvalue=dataResult.data.session;
                // alert(JSON.stringify(dataResult)); 
                    $('#login_session').val(allSessionvalue[0].value);
                    $('#session_name').val(allSessionvalue[0].sessionName);
                    //alert(allSessionvalue[0].sessionName);
                    //return false;
                    flag=1;
                 $('#allSessionValue').val(JSON.stringify(allSessionvalue));
                
          }else{
              // alert(dataResult.error.msg);
               $("#error").html("Please enter Valid user Id");
               $("#error").fadeIn(750).fadeOut(3000);
               $("#email").focus();
               flag=0;
               return false;
           }

        }
        });
        url = 'index.php?pageName=submit';
        document.loginForm.action=url;
        if(flag == 1){
            document.getElementById("loginForm1").action=url;
        }else{
            return false;
        }
                        
                }

//                else{
//                    var url="username="+input+"&pass="+input1+"&mode="+'checkLogin';
//
//                    $.ajax({
//                        type: "post",
//                        url: "index.php?pageName=checklogin",
//                        data: url ,
//                        error:
//                        function(result) {
//                        },
//                        success: function(data)
//                        {
//
//
//                            if(data==0){
//                                $("#error").html("Invailid email and Password ");
//                                 errornotice.fadeIn(750);
//                                 return false;
//
//                            }
//                            else{
//
//                                document.loginForm.submit();
//                            }
//
//
//
//
//
//                        }
//
//                    })
//
//                }

     
      
 
       
    });


$("#email").keypress(function(){


$("#error").hide();
});
$("#password").keypress(function(){


$("#error").hide();
});
   
});

 function isEMaillog(s)
{
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var booleanValue=emailPattern.test(s);
   // alert("validation"+booleanValue);

    if(!booleanValue)
    {
        return true ;
    }else{
        return false;
    }
}


function isFormId(s)
{
   var emailPattern = /^[0-9]{2,10}$/;
    var booleanValue=emailPattern.test(s);
   // alert("validation"+booleanValue);

    if(!booleanValue)
    {
        return true ;
    }else{
        return false;
    }
}
 function press(e){

    if(e.which == 13){   
      checkMail();
    }
    
   
}
function trim(myString)
{
    return myString.replace(/\s/g,'');
}
function checkMail(){
    var input = $('#email').val();
        var input1 = $('#password').val();

        if(input){//email check function remove by Saurabh Jaiswal.
             $("#error").html("Please Enter Enrollment No");
             errornotice.fadeIn(750);
                  $('#email').focus();
                 
        }


        else if(input1 =="")
                {
                    $("#error").html("Please Enter Password");
                    errornotice.fadeIn(750);
                    $('#password').focus();
                   
                }
                else{
                    var url="username="+input+"&pass="+input1+"&mode="+'checkLogin';

                    $.ajax({
                        type: "post",
                        url: "index.php?pageName=checklogin",
                        data: url ,
                        error:
                        function(result) {
                        },
                        success: function(data)
                        {


                            if(data==0){
                                $("#error").html("Invailid Enrollment No or Password ");// Enrollment No replaced Email by Saurabh Jaiswal.
                                 errornotice.fadeIn(750);

                            }
                            else{

                                document.loginForm.submit();
                            }





                        }

                    })

                }

}


