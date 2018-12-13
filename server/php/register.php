<?php
 header("Access-Control-Allow-Origin:*");
 header("content-type:text/html;charset=utf-8");

 $username = $_POST['username'];

 $password = $_POST['password'];
//  $user_p=$_POST['user_p1'];
//  var_dump($user_p);

 //服务器进入方式不同
 $coon = new mysqli('localhost','root','root','vivo_admin');
 // $coon = new mysqli('localhost','root','','vivo_admin',3306);
 $sql="SELECT * FROM `vivo_user_info` WHERE tel='$username'";
 
 $coon->query("SET CHARACTER SET 'utf8'");
 
 $coon->query("SET NAMES 'utf8'");
 
 $result = $coon -> query($sql);
 
 $row = mysqli_fetch_array($result);

 if($row){

     if($row["password"] == $password){
        //  echo 1;
         echo "<script>alert('恭喜您，登陆成功！');location.href='../../app/home.html#$username='</script>";
     }else{
        //  echo
         echo "<script>alert('密码错误，请查证后再输！');location.href='http://localhost/githhub534241247/app/register.html'</script>";
     }
 }else{
    //  echo 2;
     echo "
     <script>alert('账号密码错误，请重新输入！');location.href='http://localhost/githhub534241247/app/register.html'</script>";
 }

?>