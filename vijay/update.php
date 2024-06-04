<?php

header("Content-type:application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');

include("config.php");
$id=$_GET['id'];

$json=file_get_contents('php://input');
$obj=json_decode($json, true);


$name=$obj['name'];
$mobile=$obj['mobile'];
$email=$obj['email'];
$password=$obj['password'];

if($name!='' && $mobile!='' && $email!='' && $password!='')
{
 
    $ins=$conn->query("update tbl_users set u_name='$name',u_mobile='$mobile',u_email='$email',u_password='$password' where u_id='$id'");
    if($ins)
    {
        $response = array(
            'status' =>'success',
            'message' =>'User Updated Successfully'
        );
        echo json_encode($response);
    }
    else
    {
        $response = array(
        'status' =>'error'
        );
        echo json_encode($response);
    }
}
else
{
    echo "User coul'd updated!!!";
}
?>