dis_info = "#HomeInfo";
window.fading = false;

$(document).ready(function(){
	
	$("#HomeInfo").fadeTo(1000,1);
	
	$("#Home").mouseover(function(){
		console.log(window.fading);
		if(window.fading)
			return;
		if(dis_info == "#HomeInfo")
			return;
		window.fading = true;
		$(dis_info).fadeTo(500,0,function () {
			$(dis_info).hide();
			dis_info = "#HomeInfo";
			$("#HomeInfo").fadeTo(500,1,function(){
				window.fading = false;
			});
		});
	});
	$("#Media").mouseover(function(){
		console.log(window.fading);
		if(window.fading)
			return;
		if(dis_info == "#MediaInfo")
			return;
		window.fading = true;
		$(dis_info).fadeTo(500,0,function () {
			$(dis_info).hide();
			dis_info = "#MediaInfo";
			$("#MediaInfo").fadeTo(500,1,function(){
				window.fading = false;
			});
		});
	});
	$("#Biographies").mouseover(function(){
		console.log(window.fading);
		if(window.fading)
			return;
		if(dis_info == "#BiographiesInfo")
			return;
		window.fading = true;
		$(dis_info).fadeTo(500,0,function () {
			$(dis_info).hide();
			dis_info = "#BiographiesInfo";
			$("#BiographiesInfo").fadeTo(500,1,function(){
				window.fading = false;
			});
		});
	});
	$("#Tutorials").mouseover(function(){
		console.log(window.fading);
		if(window.fading)
			return;
		if(dis_info == "#TutorialsInfo")
			return;
		window.fading = true;
		$(dis_info).fadeTo(500,0,function () {
			$(dis_info).hide();
			dis_info = "#TutorialsInfo";
			$("#TutorialsInfo").fadeTo(500,1,function(){
				window.fading = false;
			});
		});
	});
	$("#Blog").mouseover(function(){
		console.log(window.fading);
		if(window.fading)
			return;
		if(dis_info == "#BlogInfo")
			return;
		window.fading = true;
		$(dis_info).fadeTo(500,0,function () {
			$(dis_info).hide();
			dis_info = "#BlogInfo";
			$("#BlogInfo").fadeTo(500,1,function(){
				window.fading = false;
			});
		});
	});
});