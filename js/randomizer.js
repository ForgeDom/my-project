let button = document.getElementById("generate");
button.addEventListener("click", displayRandomCarImage); // Викликаємо функцію при натисканні кнопки

let carlist = ["Alfa Romeo 8C 2900", "Aston Martin DB4", "Austin-Healey 3000", "Bentley S1 Continental", "BMW 3.0 CSL", "Cadillac Eldorado", "Chevrolet Bel-Air", "Chevrolet El Camino SS", "Duesenberg J", "Ford Thunderbird", "Jaguar E-Type", "Lamborghini Miura", "Lincoln Continental", "Lotus Esprit", "Maserati 3500 GT Spyder", "Mercedes-Benz 100 CL Gullwing", "Packard Clipper", "Plymouth Barracuda", "Pontiac Bonneville", "Pontiac Firebird", "Rolls-Royce Dawn Drophead", "Rolls-Royce Phantom I", "Shelby Cobra", "Volvo P1800"];

let carName = "";
let imagePath = "";

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * carlist.length);
    return randomNumber;
}

function getImage(carName) {
    switch (carName) {
        case "Alfa Romeo 8C 2900":
            return "../photos/cars/alfa-romeo-8c-2900.jpeg";
        case "Aston Martin DB4":
            return "../photos/cars/aston-martin-db4.jpeg";
        case "Austin-Healey 3000":
            return "../photos/cars/austin-healey-3000.jpg";
        case "Bentley S1 Continental":
            return "../photos/cars/bentley-s1-continental.jpeg";
        case "BMW 3.0 CSL":
            return "../photos/cars/bmw-3-0-csl.jpeg";
        case "Cadillac Eldorado":
            return "../photos/cars/cadillac-eldorado.jpg";
        case "Chevrolet Bel-Air":
            return "../photos/cars/chevy-bel-air.jpeg";
        case "Chevrolet El Camino SS":
            return "../photos/cars/chevy-el-camino.jpeg";
        case "Duesenberg J":
            return "../photos/cars/deusenberg-j.jpg";
        case "Ford Thunderbird":
            return "../photos/cars/ford-thunderbird.jpeg";
        case "Jaguar E-Type":
            return "../photos/cars/jaguar-e-type.jpeg";
        case "Lamborghini Miura":
            return "../photos/cars/lambo-miura.jpeg";
        case "Lincoln Continental":
            return "../photos/cars/lincoln-continental.jpg";
        case "Lotus Esprit":
            return "../photos/cars/lotus-esprit.jpeg";
        case "Maserati 3500 GT Spyder":
            return "../photos/cars/maserati-3500-gt-spyder.jpeg";
        case "Mercedes-Benz 100 CL Gullwing":
            return "../photos/cars/mercedes-benz-gullwing.jpeg";
        case "Packard Clipper":
            return "../photos/cars/packard-clipper.jpg";
        case "Plymouth Barracuda":
            return "../photos/cars/plymouth-barracuda.jpg";
        case "Pontiac Bonneville":
            return "../photos/cars/pontiac-benneville.jpg";
        case "Pontiac Firebird":
            return "../photos/cars/pontiac-firebird.jpeg";
        case "Rolls-Royce Dawn Drophead":
            return "../photos/cars/rolls-royce-dawn-drophead.jpeg";
        case "Rolls-Royce Phantom I":
            return "../photos/cars/rolls-royce-phantom-i.jpeg";
        case "Shelby Cobra":
            return "../photos/cars/shelby-cobra.jpg";
        case "Volvo P1800":
            return "../photos/cars/volvo-p1800.jpeg";
        default:
            return "../photos/randomizer/anonym.png";   

    }
}

function getRandomCarImage() {  
    const randomIndex = generateRandomNumber();
    carName = carlist[randomIndex];
    imagePath = getImage(carName);
}

function displayRandomCarImage() {
    getRandomCarImage();
    
    // Знаходимо елемент <img> всередині класу "new-photo"
    const imgElement = document.querySelector(".new-photo img");
    const carNameElement = document.querySelector(".new-photo h1");
    console.log(imagePath);
    imgElement.src = imagePath; // Встановлюємо шлях до зображення
    imgElement.alt = carName; // Встановлюємо опис для зображення
    carNameElement.textContent = carName; 

    console.log(carName);
    console.log(imagePath);
}
