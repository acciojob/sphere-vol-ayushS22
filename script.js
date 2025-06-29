function volume_sphere() {
    //Write your code here
	// Prevent the form from submitting and refreshing the page this is good practice according to me
    event.preventDefault();

    // Get the radius input value
	//Find the input box with ID radius, get what the user typed in it, and store that in a variable called radius
    let radius = document.getElementById("radius").value;

    // Convert to number
    radius = parseFloat(radius);

    // for output
    const volumeOutput = document.getElementById("volume");

    // Validate input: check if it's a number and non-negative
    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = "NaN";
    } else {
        // Calculate volume: V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        // Round to 4 decimal places and display
        volumeOutput.value = volume.toFixed(4);
    }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
