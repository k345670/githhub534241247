<?php	
	header("content-type:text/html;charset=utf-8");
	header('Access-Control-Allow-Origin:*');
	
	$tel = $_POST['tel'];
	
	$password = $_POST['password'];
	//服务器进入方式不同
//	$coon = new mysqli('localhost','root','root','vivo_admin');
	 $coon = new mysqli('localhost','root','','vivo_admin',3306);
	$sql = "INSERT INTO vivo_user_info(tel,password) VALUES ('$tel','$password')";
	// $sql="INSERT INTO `vivo_user_info`(`tel`,`password`) VALUES('$tel','$password')";
	
	$coon->query("SET CHARACTER SET 'utf8'");
	
	$coon->query("SET NAMES 'utf8'");
	
	$row=$coon -> query($sql);
	// var_dump($row);
	if($row){
		// echo "aleart('你大爷')";
		echo "<script>location.href='../../app/register.html'</script>";
	}

	// if($row){
    //     //注册成功，调到登陆也。
    //      echo "<script>alert('恭喜你，注册成功！！！');location.href='../html/denglu.html'</script>";
    // }else{
    //      echo "<script>alert('不幸的是，注册失败！') ;location.href='zhuce.html'</script>";
?>