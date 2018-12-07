<?php
    header('Access-Control-Allow-Origin:*',"content-type:text/html;charset=utf-8");
	// header();
	
	$tel = $_POST['tel'];
    // var_dump($tel);
	//服务器进入方式不同
	$coon = new mysqli('localhost','root','root','vivo_admin');
	// $coon = new mysqli('localhost','root','','vivo_admin',3306);
    // $sql = "select vivo_user_info from tel where tel='$tel'";
    $sql="SELECT `tel` FROM `vivo_user_info` WHERE tel='$tel'";
	
	$coon->query("SET CHARACTER SET 'utf8'");
	
    $coon->query("SET NAMES 'utf8'");
    
    $result = $coon -> query($sql);
    var_dump($coon -> query($sql));
    
    $row = mysqli_fetch_array($result);
    var_dump($row);

	// var_dump($result);
	if($row){
        echo 1;
	}else{
		echo 0;
	}






?>