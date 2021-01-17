Mic Drop = "";
Telepathy = "";

function preload() {
    Mic Drop = loadSound("Mic Drop.mp3");
    Telepathy = loadSound("Telepathy.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    Mic Drop.play();
}

function play2() {
    Telepathy.play();
}