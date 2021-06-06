noseX=0;
noseY=0;
function preload() {
    Mask=loadImage('https://i.postimg.cc/Pxh8q4q8/xl-riding-glasses-fabfashion-original-imafgqrgjghhnzbh.jpg');
}

function setup() {
  canvas=createCanvas(360,350);  
  canvas.position(600,300);
  video=createCapture(VIDEO);
  video.hide();

  classifier=ml5.poseNet(video,modelLoaded)
  classifier.on('pose',gotPose)
}
function modelLoaded() {
    console.log("Posenet is initialized")
}
function draw() {
    image(video,0,0,360,350)
    image(Mask,noseX,noseY,200,150);
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
      
        noseX=results[0].pose.nose.x-290;
        noseY=results[0].pose.nose.y-125;
      }
  }
  function Capture() {
      save('the emperror.jpg')
  }








