let actionInterval = null;
let isCat1Visible = true;
let isRainbowUpsideDown = false;
let isDoubleExclamation = true;
let toggleState = true; // New variable to control toggling

function triggerAction() {
    if (toggleState) {
        // Only toggle states on every other call
        isCat1Visible = !isCat1Visible;
        isRainbowUpsideDown = !isRainbowUpsideDown;
        isDoubleExclamation = !isDoubleExclamation;
    }

    // Update cat visibility
    document.getElementById('cat1').style.display = isCat1Visible ? "block" : "none";
    document.getElementById('cat2').style.display = isCat1Visible ? "none" : "block";

    // Flip the rainbow
    document.getElementById('rainbow').style.transform = isRainbowUpsideDown ? "rotate(180deg)" : "rotate(0deg)";

    // Toggle h1 text
    let h1 = document.getElementById("bigtext"); // Corrected method name
    h1.textContent = isDoubleExclamation ? "Merry Christmas Manar!!!" : "Merry Christmas Manar!!";

    let newh1 = h1
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    newh1.style.top = `${getRandomInteger(40,130)}%`
    newh1.style.left = `${getRandomInteger(0,100)}%`
    document.body.appendChild(newh1)

    toggleState = !toggleState; // Toggle the state control variable
}

function startAction() {
    if (actionInterval) return;
    triggerAction();
    actionInterval = setInterval(triggerAction, 50); // Adjust interval as needed
}

function stopAction() {
    clearInterval(actionInterval);
    actionInterval = null;
    resetStates();
}

function resetStates() {
    isCat1Visible = true;
    isRainbowUpsideDown = false;
    isDoubleExclamation = true;
    toggleState = true; // Reset the toggle control variable
    document.getElementById('cat1').style.display = "block";
    document.getElementById('cat2').style.display = "none";
    document.getElementById('rainbow').style.transform = "rotate(0deg)";
    let h1 = document.getElementById("bigtext");
    h1.textContent = "Merry Christmas Manar!!";
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('mousedown', startAction);
    document.body.addEventListener('mouseup', stopAction);
    document.body.addEventListener('mouseleave', stopAction);
});
