/* added by Shobhit Garg for logo alignment over login,registration,confirmation pages*/

function setLogoMargin(){
    
    var leftlogo = document.getElementById("left_logo");
    //alert(leftlogo );
    if(leftlogo!=null){
        if(document.getElementById("left_logo").style.visibility==""){
            var heightOuter=document.getElementById("login-header-left").offsetHeight;
            //alert(heightOuter);
            var heightInner=document.getElementById("logo_img").offsetHeight;
            //alert(heightInner);
            var diff = heightOuter-heightInner;
            diff=parseInt(diff/2);
            //alert(diff);
            document.getElementById("logo_img").style.marginTop=diff+'px';
            document.getElementById("left_logo").style.visibility='visible';
        }
    }
}
