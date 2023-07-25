//formula - Volume = (4/3) * π * r^3


function volume_sphere() {
    //Write your code here
    let radius = parseFloat(document.getElementById("radius").value);
    const volumeField = document.getElementById("volume");
    // if (isNaN(radius)) {
    //     // Step 3: Show an alert to the user for invalid input
    //     alert("Please enter a valid number for the radius.");
    //     return; // Exit the function if the input is invalid
    //   }
    const volumeOfSphere = (4/3) * Math.PI * Math.pow(radius,3);
    volumeField.value = String(volumeOfSphere.toFixed(2));
} 


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
