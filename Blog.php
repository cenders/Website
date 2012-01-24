
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>LAN Lords - Blog</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- CSS
  ================================================== -->
	<link href='http://fonts.googleapis.com/css?family=Niconne' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="stylesheets/base.css">
	<link rel="stylesheet" href="stylesheets/skeleton.css">
	<link rel="stylesheet" href="stylesheets/layout.css">
</head>
<body>



	<!-- Primary Page Layout
	================================================== -->

	<!-- Delete everything in this .container and get started on your own site! -->
	<div class="container">
		<div id= "Banner" class="Banner columns">
			
			<h1 class="remove-bottom" style="margin-top: 40px"><img  width= 40% src="NewLogo1.png"/><img width= 25% align="right" src="first.gif"> </h1>
			<br>
			<ul class="tabs">
				<li><a href="index.html">Home</a></li>
				<li><a href="Media.html">Media</a></li>
				<li><a href="Biographies.html">Biographies</a></li>
				<li><a href="Tutorials.html">Tutorials</a></li>
				<li><a class="active" href="Blog.php">Blog</a></li>
			</ul>
		</div>
		<div class="sixteen columns">
		<?
	  	$con = mysql_connect("localhost","root","root");
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error());
		  }

		mysql_select_db("blog", $con);

		$result = mysql_query("SELECT * FROM post ORDER BY id DESC");
		
		while($row = mysql_fetch_array($result))
		  {
		  	echo "<h3>", $row['Title'] .  "</h3> <p> <strong>". $row['TheDate'] . "</strong> <br>", $row['Content'] . " <br> <em> Posted By ".$row["Author"] .  "</em></p>" ;
			echo "<hr>";
		  }

		mysql_close($con);
		?>
		</div>
		<div class="sixteen columns">
<!-- container -->
	<center>
		<p>
    	<pre>     More information about <a href="http://usfirst.org"target="_blank">FIRST</a> at <a href="http://usfirst.org"target="_blank">usfirst.org</a>		</pre>

<a href="http://youtube.com/user/FTC4977"target="_blank">
<img src="Youtube.png" alt="Youtube" align="right" width="64" height="64" />
</a>

<a href="http://www.facebook.com/pages/FTC-Team-4977/214602341946076"target="_blank">
<img src="facebook icon.png" alt="Facebook" align="right" width="64" height="64" />
</a>

		</p>
	</center>
</div>
	<br><br><br>
	

	<!-- JS
	================================================== -->
	<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
	<script src="javascripts/tabs.js"></script>

<!-- End Document
================================================== -->
</body>
</html>