
<?php

require_once 'dbconfig.php';
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  else
  {
mysqli_query($con,"INSERT INTO user(username,password)values('$_POST[username]','$_POST[password]')");
echo "done";
mysqli_close($con);}
?>
