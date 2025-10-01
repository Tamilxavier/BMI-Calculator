function calculateBMI() {
    let weightinput = prompt("Enter your weight in kg:");
    let heightinput = prompt("Enter your height in cm:");

    let weight = parseFloat(weightinput);
    let heightcm = parseFloat(heightinput);

    let height = heightcm / 100; // Convert cm to meters

    let bmi = weight / (height * height);
    
    document.getElementById("result").innerText = `Your BMI is: ${bmi.toFixed(2)}`;
}