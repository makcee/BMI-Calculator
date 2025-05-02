function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    let bmi = weight / ((height/100)**2)
    bmi = bmi.toFixed(2);
    document.getElementById("result").textContent = "Your BMI is " + bmi;
}