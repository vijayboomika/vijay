<?php

header("Content-type:application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');

include("config.php");


$id=$_GET['id'];

// $json=file_get_contents('php://input');
// $obj=json_decode($json, true);

if ($id!='')
{
// if($name!='' && $mobile!='' && $email!='' && $password!='')
// {
 
    $del_qry = $conn->query("delete from tbl_users where u_id='$id'");
    if($del_qry)
    {
        $response = array(
            'status' =>'success',
            'message' =>'User Deleted Successfully'
        );
        echo json_encode($response);
    }
    else
    {
        $response = array(
        'status' =>'error',
        'message' =>'User unable to delete'
    );
        echo json_encode($response);
    }
}
// }
?>