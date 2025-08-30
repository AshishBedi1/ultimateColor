const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let interval;

function startChangingColor() {
    if (!interval) {
        interval = setInterval(changeBGcolor, 1000)
    }

    function changeBGcolor() {
        document.body.style.backgroundColor = randomColor();
    }
}

function stopChangingColor() {
    clearInterval(interval)
    interval = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);