let redlight = document.querySelector("#redlight");
let car = document.querySelector("#car");

setTimeout(() => {
    startAnimation();
}, 2000);

let startAnimation = () => {
    redlight.style.display = "none";
    let startkeyframes = {"left": "2vw"};
    let endkeyframes = {"left": "100vw"};
    let options = {
        duration: 5000,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    };
    let animation = car.animate([startkeyframes, endkeyframes], options);

    let currentPosition = parseInt(car.style.left);
    let newPosition = currentPosition + 50;

    let update = () => {
        currentPosition += 2;
        car.style.left = currentPosition + " 10px";

        if (currentPosition < newPosition) {
            requestAnimationFrame(update);
        }
    };

    requestAnimationFrame(update);
};


