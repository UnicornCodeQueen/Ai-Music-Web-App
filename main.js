Mic_Drop = "";
telepathy = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    Mic_Drop = loadSound("Mic Drop.mp3");
    telepathy = loadSound("Telepathy.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function MicDrop(); {
    Mic_Drop.play();
    Mic_Drop.setVolume(1);
    Mic_Drop.rate(1);
}

function Telepathy(); {
    telepathy.play();
    telepathy.setVolume(1);
    telepathy.rate(1);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWrist = " + leftWristX + "LeftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + "RightWristY = " + rightWristY);
    }
}