video = "";
status = "";

function preload()
{
     
   
}
function setup()
{

  video = createCapture(VIDEO);
  video.size(60, 500);
  canvas = createCanvas(480, 380);
  canvas.center();

}
function draw()
{
    image(video, 30, 30, 480, 380);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log('Model Loaded!');
    status = true;
    video.loop();
    video.speed(1);
    video.Volume(0);
}
