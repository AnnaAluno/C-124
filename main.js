noseX=0;
noseY=0;

function preload() {
clomNose = loadImage ('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video.size(300, 300);
    video.hide();



    poseNet = m15.poseNet(video, modelLoaded);
    poneNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('Pose foi inicializado');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
        function draw() {
            Image(video, 0, 0, 300, 300);
            Image(clowNose, noseX, noseY, 30, 30);
        }


        function takeSnapshot(){
            save('myFilterImage.png');
        }
    
