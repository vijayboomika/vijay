<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("config.php");

$id=$_GET ['id'];

if($id!='')
{
    $qry="where u_id = '$id'";
}
else{
    $qry ='';
}

$sel=$conn->query("select * from tbl_users $qry");

$res=$sel->fetchAll();
$i=0;
foreach($res as $rs){
    $opt[$i]['id']=$rs['u_id'];
    $opt[$i]['name']=$rs['u_name'];
    $opt[$i]['mobile']=$rs['u_mobile'];
    $opt[$i]['email']=$rs['u_email'];
    $opt[$i]['password']=$rs['u_password'];
    $i=$i+1;
}

echo json_encode($opt);


?>