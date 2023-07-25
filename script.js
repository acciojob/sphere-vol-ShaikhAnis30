//formula - Volume = (4/3) * π * r^3


function volume_sphere(event) {
    //Write your code here
    const radius = parseFloat(document.getElementById("radius").value);
    const volumeField = document.getElementById("volume");
    // if (isNaN(radius)) {
    //     volumeField.value = NaN
    //     return; // Exit the function if the input is invalid
    // }

    if(radius != Number) volumeField.value = NaN;
    const volumeOfSphere = (4/3) * Math.PI * Math.pow(radius,3);
    volumeField.value = volumeOfSphere.toFixed(4);
    event.preventDefault();
} 
//form is getting submitted to default(same page) and automatically gets refreshed, so to stop this we use
//event.preventDefault() 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
