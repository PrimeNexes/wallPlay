<!DOCTYPE html>
<html>
  <body>

    <?php
session_start();
include("dbconfig.php");
echo "Success";
$myusername = mysqli_real_escape_string($con,$_GET['username']);
$mypassword = mysqli_real_escape_string($con,$_GET['password']); 
$sql="SELECT * FROM user WHERE username = '$myusername' and password = '$mypassword';";
$result=mysqli_query($con,$sql);
      if($result) {?>
    <alert>Success</alert>
      <?php
      }
	  else {?>
    <alert>Invalid Username or Password</alert>
     <?php }?>
  </body>
</html>
