// Story

var image_id = 0;

function diffImage(img) {
	
	image_id ++;
	
	if (image_id == 1) {
		img.src = "img/request.svg";
	}
	else if (image_id == 2) {
		img.src = "img/validate.svg";
	}
	else if (image_id == 3) {
		img.src = "img/makedatablock.svg";
	}
	else if (image_id == 4) {
		img.src = "img/addtoblockchain.svg";
	}
	else {
		window.location.replace("analytics.html");
	}
	
}