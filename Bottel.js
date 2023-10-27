img = "";
status3 = "";

function preload() {
    img = loadImage("IMG20231025105841.jpg")
}

function setup() {
 canvas = createCanvas(640,420); 
 canvas.center();

 objectDetector = ml5.objectDetector("cocossd",modelLoaded);
 document.getElementById("status").innerHTML = "Status :-> Detecting Object" ;
}

function draw() {
    image(img,0,0,640,420);

    fill("red");
    text("Bed",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);

}

function gotresults(error,results) {
    if (error) {
        console.error("ERRoR!!",error);
    }
    console.log(results);
}

function modelLoaded() {
    console.log("Model is Loaded");
    status3 = true;
    objectDetector.detect(img,gotresults)
}