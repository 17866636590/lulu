<?php
header('content-type:text/html;charset=utf-8');
$responseData=array("code"=>0,"msg"=>"");
$telephone=$_POST['telephone'];
$password=$_POST['password'];

if(!$telephone){
    $responseData['code']=1;
    $responseData['msg']='请输入正确的手机号';
    echo json_encode($responseData);
    exit;
}
if(!$password){
    $responseData['code']=2;
    $responseData['msg']='请输入用户密码';
    echo json_encode($responseData);
    exit;
}
$link=mysql_connect("127.0.0.1","root","123456");
if(!$link){
    echo "数据库连接失败";
    exit;
}
mysql_set_charset('utf8');
mysql_select_db('midea');
$password=md5(md5($password).'qingdao');
$sql="select *from mideauser where telephone='{$telephone}' and password='{$password}'";
$res=mysql_query($sql);
$row=mysql_fetch_assoc($res);
if(!$row){
    $responseData['code']=3;
    $responseData['msg']='密码或用户名错误';
    echo json_encode($responseData);
    exit; 
}
$responseData['msg']='登录成功';
    echo json_encode($responseData);
mysql_close($link);
?>