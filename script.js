//formula - Volume = (4/3) * π * r^3


function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
    const radius = parseFloat(document.getElementById("radius").value);
	
    const volumeField = document.getElementById("volume");
	// if(isNaN(radius)) {
	// 	volumeField.value = "NaN";
	// 	return;
	// }
    const volumeOfSphere = (4/3) * Math.PI * Math.pow(radius,3);
    volumeField.value = volumeOfSphere.toFixed(4);
} 
//form is getting submitted to default(same page/same url) and automatically gets refreshed, so to stop this we use
//event.preventDefault() 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
