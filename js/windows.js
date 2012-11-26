		var _item = null;
		var mouse_x = 0;
		var mouse_y = 0;
		var lastWindow = false;
		function minSize(val,min){
			return (val > min ? val:min);
		}
		
		function window_init(wind,wid,hgt)
		{
			var newWindow = document.getElementById(wind);
			
			newWindow.style.width = wid + "px";
			newWindow.style.height = hgt + "px";
			
			newWindow.innerHTML = "<input id=\"" + wind + "_input\" class=\"input\" onkeyup=\" terminal('" + wind + "_input','" + wind + "_inner')\" onsubmit=\"clearTimeout(ter)\"><div id='" + wind + "_background' class='background' style='width:" + wid + "px;height:" + hgt+ "px;' ></div><div id='" + wind + "_drag' class=\"drag\" onmousedown=\"_move_item('" + wind + "','drag');\" style=\"width:" + wid +"px\"> </div><div id=\"" + wind + "_resizeR\" class=\"resizeR\" onmousedown=\"_move_item('" + wind + "','resizeR');\" style=\"height:" + (hgt - 20) + "px\"> </div><div id=\"" + wind + "_resizeL\" class=\"resizeL\" onmousedown=\"_move_item('" + wind + "','resizeL');\" style=\"height:" + (hgt - 20) + "px\"> </div><div id=\"" + wind + "_resizeD\" class=\"resizeD\" onmousedown=\"_move_item('" + wind + "','resizeD');\" style=\"width:" + (wid - 20) +"px\"> </div><div id=\"resizeLU\" class=\"resizeLU\" onmousedown=\"_move_item('" + wind + "','resizeLU');\"> </div><div id=\"resizeRU\" class=\"resizeRU\" onmousedown=\"_move_item('" + wind + "','resizeRU');\"> </div><div id=\"resizeLD\" class=\"resizeLD\" onmousedown=\"_move_item('" + wind + "','resizeLD');\"> </div><div id=\"resizeRD\" class=\"resizeRD\" onmousedown=\"_move_item('" + wind + "','resizeRD');\"> </div><div id='content' class='content' ><code>Last login: Sun Nov 25 09:48:10 on ttys000<br>Andrew's-MacBook-Pro:~ <span id=\"" + wind + "_inner\"></span></code></div>";
			document.onmousemove = _move;
			document.onmouseup = _stop;
			setTimeout(function(){document.getElementById(wind + "_inner").innerHTML = "ben$ scp ben@friends.lobos.me:www/viruses ~/documents";},300);
			setTimeout(function(){document.getElementById(wind + "_inner").innerHTML = document.getElementById(wind + "_inner").innerHTML + "<br> test1.exe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100%  386     0.4KB/s   00:01   ";},500);
			setTimeout(function(){document.getElementById(wind + "_inner").innerHTML = document.getElementById(wind + "_inner").innerHTML + "<br> test2.exe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100%  386     0.4KB/s   00:01   ";},1000);
			setTimeout(function(){document.getElementById(wind + "_inner").innerHTML = document.getElementById(wind + "_inner").innerHTML + "<br> fixed.exe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100%  386     0.4KB/s   00:02   ";},1700);
			setTimeout(function(){document.getElementById(wind + "_inner").innerHTML = document.getElementById(wind + "_inner").innerHTML + "<br> resetServer.exe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100%  386     0.4KB/s   00:05   ";},2500);
		}
		
		function init(){
			
		}
		
		function _stop()
		{
			if(_item){
				document.getElementById(_item.Name + "_input").focus();
				_item = null;
			}
		}
		
		function _move(e)
		{
			mouse_x = document.all ? window.event.clientX : e.pageX;
			mouse_y = document.all ? window.event.clientY : e.pageY;
			if(_item != null)
			{
				switch(_item.movementType){
					case "drag":
						_item.style.left = (mouse_x - offSet_Left) + "px";
						_item.style.top = (mouse_y - offSet_Top) + 20 + "px";
						break;
					case "resizeL":
						_item.style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						_item.style.left = ( _item.style.width != "200px" ? mouse_x - offSet_Left + "px": _item.style.left);
						document.getElementById(_item.Name + "_drag").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						document.getElementById(_item.Name + "_resizeD").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) - 20 + "px";
						document.getElementById(_item.Name + "_background").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						break;
					case "resizeR":
						_item.style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) + "px";
						document.getElementById(_item.Name + "_drag").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) + "px";
						document.getElementById(_item.Name + "_resizeD").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) - 20 + "px";
						document.getElementById(_item.Name + "_background").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200)+ "px";
						break;
					case "resizeD":
						_item.style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) + "px";
						document.getElementById(_item.Name + "_resizeL").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) - 20 + "px";
						document.getElementById(_item.Name + "_resizeR").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) - 20 + "px";
						document.getElementById(_item.Name + "_background").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) + "px";
						break;
						
					case "resizeLU":
						//change Left size/*
						_item.style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						_item.style.left = ( _item.style.width != "200px" ? mouse_x - offSet_Left + "px": _item.style.left);
						_item.style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 19 ),100) + "px";
						_item.style.top = ( _item.style.height != "100px" ? mouse_y - offSet_Top + 20 + "px": _item.style.top);
						document.getElementById(_item.Name + "_drag").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						document.getElementById(_item.Name + "_resizeD").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) - 20 + "px";
						document.getElementById(_item.Name + "_resizeL").style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 19 ),100) - 20 + "px";
						document.getElementById(_item.Name + "_resizeR").style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 9 ),100) - 20 + "px";
						document.getElementById(_item.Name + "_background").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						document.getElementById(_item.Name + "_background").style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 19 ),100) + "px";
						break;
					case "resizeRU":
						_item.style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 19 ),100) + "px";
						_item.style.top = ( _item.style.height != "100px" ? mouse_y - offSet_Top + 20 + "px": _item.style.top);
						_item.style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) + "px";
						document.getElementById(_item.Name + "_drag").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) + "px";
						document.getElementById(_item.Name + "_resizeD").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) - 20 + "px";
						document.getElementById(_item.Name + "_resizeL").style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 39 ),100) + "px";
						document.getElementById(_item.Name + "_resizeR").style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 39 ),100) + "px";
						document.getElementById(_item.Name + "_background").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200)+ "px";
						document.getElementById(_item.Name + "_background").style.height = minSize((_item.TopSizeStart - (mouse_y -  _item.TopStart) + offSet_Top - 19 ),100) + "px";
						break;
					case "resizeLD":
						_item.style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						_item.style.left = ( _item.style.width != "200px" ? mouse_x - offSet_Left + "px": _item.style.left);
						_item.style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) + "px";
						document.getElementById(_item.Name + "_drag").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						document.getElementById(_item.Name + "_resizeD").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) - 20 + "px";
						document.getElementById(_item.Name + "_resizeL").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) - 20 + "px";
						document.getElementById(_item.Name + "_resizeR").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) - 20 + "px";
						document.getElementById(_item.Name + "_background").style.width = minSize((_item.LeftSizeStart - (mouse_x -  _item.LeftStart) + offSet_Left ),200) + "px";
						document.getElementById(_item.Name + "_background").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) + "px";
						break;
					case "resizeRD":
						_item.style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) + "px";
						_item.style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) + "px";
						document.getElementById(_item.Name + "_drag").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) + "px";
						document.getElementById(_item.Name + "_resizeD").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) - 20 + "px";
						document.getElementById(_item.Name + "_resizeL").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) - 20 + "px";
						document.getElementById(_item.Name + "_resizeR").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) - 20 + "px";
						document.getElementById(_item.Name + "_background").style.width = minSize((mouse_x - _item.offsetLeft + offSet_Right),200) + "px";
						document.getElementById(_item.Name + "_background").style.height = minSize((mouse_y - _item.offsetTop + offSet_Bottom),100) + "px";
						break;
				}
			}
		}
		function _move_item(wind,type)
		{
			if(lastWindow != false){
				lastWindow.className = "";
				lastWindow.className = "window";
			}
			
			_item = document.getElementById(wind);
			_item.Name = wind;
			_item.movementType = type; 
			offSet_Left = mouse_x - _item.offsetLeft;
			offSet_Top = mouse_y - _item.offsetTop + 20;
			
			offSet_Right =_item.style.width.replace("px","") - (mouse_x - _item.offsetLeft);
			offSet_Bottom = _item.style.height.replace("px","") - (mouse_y - _item.offsetTop);
			
			_item.TopStart = _item.offsetTop;
			_item.TopSizeStart = _item.style.height.replace("px","");
			
			_item.LeftStart = _item.offsetLeft;
			_item.LeftSizeStart = _item.style.width.replace("px","");
			
			_item.className += " active";
			lastWindow = _item;
		}
		
		function _click(wind){
				alert("click");
		}
		
		
		function terminal(theInput,tar){
				document.getElementById(tar).innerHTML=document.getElementById(theInput).value;
		}