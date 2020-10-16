<?php
header('Content-type:text/html;charset=utf8');
//模拟
$responseData=array("code"=>0,"msg"=>"");
$telephone=$_POST['telephone'];
$password=$_POST['password'];
$repassword=$_POST['repassword'];
if(!$telephone){
    $responseData['code']=1;
    $responseData['msg']='手机号不能为空';
    echo json_encode($responseData);
    exit;
}
if(!$password){
    $responseData['code']=2;
    $responseData['msg']='密码不能为空';
    echo json_encode($responseData);
    exit;
}
if(!$repassword){
    $responseData['code']=3;
    $responseData['msg']='确认密码不能为空';
    echo json_encode($responseData);
    exit;
}
if($repassword!=$password){
    $responseData['code']=6;
    $responseData['msg']='两次密码不一致';
    echo json_encode($responseData);
    exit;
}
//1.链接数据库
$link=mysql_connect("127.0.0.1","root","123456");
//2.检查
if(!$link){
    echo "链接数据库失败";
    exit;
}
//3.设置字符集
mysql_set_charset('utf8');
//4.选择数据库
mysql_select_db('midea');
//5.准备sql语句
//加密
$password=md5(md5($password).'qingdao');
//判断用户是否存在
$sql1="select * from mideauser where telephone='{$telephone}'";
$res1=mysql_query($sql1);
//取出数据判断
$row=mysql_fetch_assoc($res1);
if($row){
    $responseData['code']=4;
    $responseData['msg']='用户名已存在';
    echo json_encode($responseData);
    exit;
}
$sql="insert into mideauser (telephone,password) values ('{$telephone}','{$password}')";
//6.发送语句
$res=mysql_query($sql);
if(!$res){
    $responseData['code']=5;
    $responseData['msg']='注册失败';
    echo json_encode($responseData);
    exit;
}
$responseData['msg']='注册成功';
echo json_encode($responseData);
//8.关闭
mysql_close($link); 
?>