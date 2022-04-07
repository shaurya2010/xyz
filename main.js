
img = "";
status = "";
object = [];

function preload(){
img = loadImage('dog_cat.jpg')
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectdetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
  }
  function draw() {
      image(img, 0, 0, 640, 420);

      if(status != "")
      {
        for (i = 0; i <object.lenght; i++)
        document.getElementById("status").innerHTML = "status : Object Detected";

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y,);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        {
          document.getElementById("status").innerHTML = "status : Object Detected";
           
          fill("#FF0000");
          percent = floor(object[i].confidence * 100);
          text(object[i].label + " " + percent + "%", objects[i].x, objects[i].y);
          nofill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
      fill("#FF0000");
      text("dog", 45, 75);
      noFill();
      stroke("#FF0000");
      rect(30, 60, 450, 350 ); 

      fill("#FF0000");
      text("cat", 320, 120);
      nofill();
      stroke("#FF0000");
  }

  function modelLoaded() {
     console.log("Model Loaded!")
     status = true;
    objectDetector.detect(img, gotResult);
  }
  function  gotResult(error, results)  {
    if (error) {
        console.log(error);
    }
 console.log(results);
 object = results;
  }