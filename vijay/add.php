<?php
include("config.php");

header("Content-type:application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');

$json=file_get_contents('php://input');
$obj=json_decode($json, true);

// echo $name;

$name=$obj['name'];
$mobile=$obj['mobile'];
$email=$obj['email'];
$password=$obj['password'];

if($name!='' && $mobile!='' && $email!='' && $password!='')
{
    // echo "insert into tbl_users (u_name,u_mobile,u_email,u_password) values
    // ('$name','$mobile','$email','$password')";
    $ins=$conn->query("insert into tbl_users (u_name,u_mobile,u_email,u_password)
     values('$name','$mobile','$email','$password')");
    if($ins)
    {
        $response = array(
            'status' =>'success',
            'message' =>'User Added Successfully'
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
    echo "User Coul'd Added!!!";
}
?>
