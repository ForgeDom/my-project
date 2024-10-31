// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll(".nav-link");
//     const contentDiv = document.getElementById("content");

//     // Attach click event listener to each nav-link
//     links.forEach(link => {
//         link.addEventListener("click", function(event) {
//             event.preventDefault(); // Prevent full page reload

//             const targetFile = link.getAttribute("data-target"); // Get the target HTML file

//             // Fetch the target content
//             fetch(targetFile)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error(`Failed to load ${targetFile}`);
//                     }
//                     return response.text();
//                 })
//                 .then(data => {
//                     contentDiv.innerHTML = data; // Inject new content into content div
//                     window.history.pushState({path: targetFile}, '', targetFile); // Update URL
//                 })
//                 .catch(error => console.log('Error loading content:', error));
//         });
//     });

//     // Handle browser navigation (back/forward)
//     window.onpopstate = function(event) {
//         if (event.state) {
//             const targetFile = event.state.path;
//             fetch(targetFile)
//                 .then(response => response.text())
//                 .then(data => {
//                     contentDiv.innerHTML = data;
//                 })
//                 .catch(error => console.log('Error loading content:', error));
//         }
//     };
// });

    let counter = 1; // Start with the first image
    let carImage = document.querySelector("#car_image");

    // Array of image sources
    const images = [
    "../photos/e28.jpg",
    "../photos/ford-probe.jpg",
    "../photos/1.jpg",
    "../photos/2.jpg",
    "../photos/3.jpg"
    // "https://drive.google.com/uc?export=view&id=1zyFQh6KMRwOt8VgP_mRlJZP4uOeDfS9G",
    // "https://drive.google.com/uc?export=view&id=1Ksp69zpsOqKrOfNvIguPDb7TZwXbwHEh"
    ];

    // Function to change the image src based on the counter
    function changeImage() {
    carImage.src = images[counter];  // Set the src to the next image
    counter++;  
    if (counter >= images.length) {  // Reset counter when it exceeds the number of images
        counter = 0;
    }
    }

    // Automatically change image every 5 seconds
    let interval = setInterval(changeImage, 3000);

    // Function to change image when clicking next or previous
    function manualChange(n) {
    clearInterval(interval);  // Stop automatic switching when manually navigating
    counter = (counter + n + images.length) % images.length;  // Adjust counter
    carImage.src = images[counter];  // Change the image src
    }

    // Add event listeners to the buttons
    document.querySelector('.prev').addEventListener('click', () => manualChange(-1));
    document.querySelector('.next').addEventListener('click', () => manualChange(1));

    let subscribed = JSON.parse(localStorage.getItem("subscribed")) || false;
    let email;
    if (subscribed) {
    document.querySelector(".Subscribed").innerHTML =
        "Ви успішно підписались на розсилку від клубу OLDTIMER";
    document.querySelector(".subscribe-form button").textContent =
        "Відписатись";
    }

    function subscribe() {
    event.preventDefault(); // To not refresh the page after subscribing
    const emailEl = document.getElementById("emailInput");//the email adress of a user

    if (emailEl.value) {
        const email = emailEl.value;
        console.log(email);
        emailEl.value = ""; // Clear input field
        if (!validateEmail(email)) {
        document.querySelector(".Subscribed").innerHTML =
            "Некоректно вказана електронна пошта";
        return;
        }
        subscribed = true;
        localStorage.setItem("subscribed", JSON.stringify(subscribed));
        document.querySelector(".subscribe-form button").textContent =
        "Відписатись";
        document.querySelector(".Subscribed").innerHTML =
        "Ви успішно підписались на розсилку від клубу OLDTIMER";
    }
    }

    function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
    }

    function unsubscribe() {
    event.preventDefault(); // To not refresh the page after unsubscribing
    subscribed = false;
    localStorage.removeItem("subscribed");
    document.querySelector(".subscribe-form button").textContent =
        "Підписатись";
    document.querySelector(".Subscribed").innerHTML = "";
    }

    function loadContent(section) {
    const content = {
        home: `      <div class="slider">
        <img id="car_image" src="../photos/e28.jpg" alt="Car image">
    </div>
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
    </div>`,
        history: `<h2>Історія</h2><p>Here is the history of the club...</p>`,
        news: `<h2>Новини</h2><p>Latest news about our club.</p>`,
        team: `<div class="car-info">
        <div class="car">
            <img src="../photos/e28.jpg" alt="e28">
            <div class="car-description">
                <h3>BMW e28 520i</h3>
                <p>Кузов E28 прийшов на зміну кузова Е 12. Новий автомобіль Е28 схожий на Е12, але має злегка змінені пропорції, за рахунок чого машина виглядає нижчою та стрімкою.</p>
            </div>
        </div>

        <div class="car">
            <img src = "../photos/ford-probe.jpg" alt="ford-probe">
            <div class="car-description">
                <h3>Ford Probe 1993</h3>
                <p>Ford Probe — спільна розробка Ford та Mazda, ідентичний автомобілю Mazda MX-6 за своєю конструкцією, випускалася з 1988 по 1997 роки.</p>
            </div>
        </div>
    </div>  `,
        join: `<h2>Приєднатись до клубу</h2><p>Want to join? Here's how...</p>`,
        merch: `<h2>Наш мерч</h2><p>Check out our exclusive merchandise!</p>`,
        music: `<h2>Музика</h2><p>Enjoy some curated music!</p>`,
        game: `<h2>Game section</h2>`
    };
        document.getElementById("main-content").innerHTML = content[section]; 
        document.querySelector('.prev').addEventListener('click', () => manualChange(-1));
        document.querySelector('.next').addEventListener('click', () => manualChange(1));
        
    };  
