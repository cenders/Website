<?php
include "LoginCheck.php";
$starttime = time();
while(file_exists("db.lock"))
{
	$timepassed = time()-$starttime;
	if ( $timepassed>5)
	{
		unlink("db.lock");
		break;
	}
}
touch("db.lock");
$dbFile = file_get_contents("users.db");
$rows = explode("\n",$dbFile);
foreach($rows as $row){
	$data = explode(",",$row);
	if($data[2] == $username){
		echo "The user is ".$data[2].", and the password is ".$data[1];
	}
}

?>