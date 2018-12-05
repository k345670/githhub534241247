<?php
	$tel = $_POST['tel'];
	$password = $_POST['password'];
	$coon = new mysqli('localhost','root','','vivo_admin',3306);
	$sql = "INSERT INTO vivo_user_info(tel,password) VALUES ('$tel','$password')";
	$coon -> query($sql);
?>