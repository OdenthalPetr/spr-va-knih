let carsArray = []
 
var output = document.getElementById("carsOutput")
 
function addCar() {
    let car = {
        nazev: "",
        autor: "",
        zanr: "",
        rok: "",
 
    }
 
    car.nazev = document.getElementById("nazevInput").value
    car.autor = document.getElementById("autorInput").value
    car.zanr = document.getElementById("zanrInput").value
    car.rok = document.getElementById("rokInput").value
    
    carsArray.push(car)
 
    displayCars()
}
 
function displayCars(){
   
   
    console.log(carsArray);
 
    for(let i = 0; i < carsArray.length; i++){
        output.innerHTML += carsArray[i].make + " " + carsArray[i].model
    }
 
}


