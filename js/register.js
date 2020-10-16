define(["jquery"], function ($) {
function registerCon(){
var in1=$('.telephone')
var in2=$('.psd')
var in3=$('.re-psd')
var in4=$(".register-box")
$(".button").click(function(){
 $.ajax({
        type:'post',
        url:"php/register.php",
        data:{
            telephone:in1.val(),
            password:in2.val(),
            repassword:in3.val()
       },
       success:function(result){
        // alert(result);
            var obj=JSON.parse(result);
            var att= $('.error_tips');
                 if(!in4.prop("checked")){  
                    alert("请勾选同意协议")
                 }else{
                    att.css({display:"none"})
                    if(obj.code==1){
                        att.eq(0).css({display:"block"}).html(obj.msg)
                    }else if(obj.code==2){
                        att.eq(1).css({display:"block"}).html(obj.msg)
                    }else if(obj.code==3||obj.code==6){
                        att.eq(2).css({display:"block"}).html(obj.msg)
                    }else if(obj.code==4) {
                        alert("该手机号已注册")
                    }else if(obj.code==5){
                        alert("注册失败")
                    }
                    else{
                        alert("注册成功")
                    }
                 }    
                 in1.val('')
                 in2.val('')
                 in3.val('')
        },error:function(msg){
                console.log(msg) 
        }
    }
       )
}) 
}
return{
    registerCon
}
})