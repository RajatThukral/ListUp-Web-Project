var filter = document.getElementById("filter");
var btn = document.getElementById("show_filters");

btn.onclick=function(){
	if(filter.className == "open"){
		//shrink
		filter.className =="";
		btn.innerHTML == "Show Filter";	
	}else{
		//expand
		filter.className == "open";
		btn.innerHTML == "Hide Filter";	
	}
};