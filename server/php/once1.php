<?php
    header("content-type:text/html;charset=utf-8");
	
	$tel = $_POST['tel'];

	//服务器进入方式不同
	$coon = new mysqli('localhost','root','root','vivo_admin');
	// $coon = new mysqli('localhost','root','','vivo_admin',3306);
	$sql = "SELECT tel from vivo_user_info where tel='$tel'";
	// $sql="INSERT INTO `vivo_user_info`(`tel`,`password`) VALUES('$tel','$password')";
	
	$coon->query("SET CHARACTER SET 'utf8'");
	

    $coon->query("SET NAMES 'utf8'");
    $result=$coon->query($sql);
    // var_dump($result);
  
    $row = mysqli_fetch_array($result);
    // var_dump($row);
    
    if($row){
        echo 1;
    }else{
        echo 0;
    }


?>