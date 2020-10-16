define(["jquery"], function ($) {
    function loginCon(){
    var in1=$('.telephone')
    var in2=$('.psd')
    var in3=$('.re-psd')
    var in4=$(".register-box")
    $(".button").click(function(){
     $.ajax({
            type:'post',
            url:"php/login.php",
            data:{
                telephone:in1.val(),
                password:in2.val(),
           },
           success:function(result){
            // alert(result);
                var obj=JSON.parse(result);
                var att= $('.error_tips');
                        att.css({display:"none"})
                        if(obj.code==1){
                            att.eq(0).css({display:"block"}).html(obj.msg)
                        }else if(obj.code==2){
                            att.eq(1).css({display:"block"}).html(obj.msg)
                        }else if(obj.code==3) {
                            alert("账号或密码错误")
                        }
                        else{
                            alert("登录成功")
                           
                        }
                        in1.val('')
                        in2.val('')
            },error:function(msg){  
                    console.log(msg)  
            }
        }
           )
    })  
    }
    return{
        loginCon
    }
    })