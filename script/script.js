// -------------------- Navbar start -------------------- //
const navbarDiv = document.getElementById('navbar');
const navbarPanel = document.getElementById('navbar-panel');
const navbarButton = document.getElementById('navbar-button');

navbarButton.addEventListener('click', showNavbar);
function showNavbar() {
    navbarDiv.style.animationName = 'navbarAppears';
    navbarPanel.style.animationName = 'navbarPanelAppears';
}

navbarDiv.addEventListener('click', hideNavbar);
function hideNavbar() {
    navbarDiv.style.animationName = 'navbarDisappears';
    navbarPanel.style.animationName = 'navbarPanelDisappears';
}
// --------------------- Navbar end --------------------- //

// --------------- Animated counter start --------------- //
window.addEventListener("scroll", counters);
const countersDiv = document.getElementById('section-8');
const countersDivVisible = 200;
let countersAppeared = false;
let countersDisappeared = false;
const counter1 = document.getElementById("counter-1");
const counter2 = document.getElementById("counter-2");
const counter3 = document.getElementById("counter-3");
const counter4 = document.getElementById("counter-4");

function counters() {
    let countersTop = countersDiv.getBoundingClientRect().top;
    if (countersTop < window.innerHeight - countersDivVisible && countersAppeared === false) {
        countersAppeared = true;
        startCounter();
    }
    if (countersTop > window.innerHeight && countersAppeared === true) {
        countersAppeared = false;
        counter1.innerHTML = 2218;
        counter2.innerHTML = 87.3;
        counter3.innerHTML = 1024;
        counter4.innerHTML = 264.7;
    }
}

function startCounter() {
    let counts = setInterval(updated);
    let upto1 = 125;
    let upto2 = 57.4;
    let upto3 = 127;
    let upto4 = 55.4;
    function updated() {
        upto1 += 7;
        counter1.innerHTML = upto1;
        upto2 += 0.1;
        counter2.innerHTML = upto2.toFixed(1);
        upto3 += 3;
        counter3.innerHTML = upto3;
        upto4 += 0.7;
        counter4.innerHTML = upto4.toFixed(1);
        if (upto1 >= 2215) {
            clearInterval(counts);
        }
    }
}
// ---------------- Animated counter end ---------------- //
