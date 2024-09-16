// Copyright (c) 2019 ml5
//

// Enumerable for item types
const itemType = Object.freeze({
    aluminum: "Aluminum",
    paper: "Paper",
    plastic: "Plastic",
    glass: "Glass",
    non_recyclable: "Non-Recyclable", 
});

// Array of only recyclable item types
recyclableTypes = [itemType.aluminum, itemType.paper, itemType.plastic, itemType.glass];

// Classifier Variable
let classifier;
// Storing result
let tempResult ="temp";
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/LHt4SmSUJ/';


// Video
let video;
// To store the classification
let label = "Waiting for recycle buddy model...";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO,{flipped:true});
  video.size(width,height);
  video.hide();

  // Start classifying
  classifyVideo();
  navigator.mediaDevices.getUserMedia({audio: true});
}

function draw() {
  background(0);
  
  // Draw video
  image(video, 0, 0);

  // Draw label
  labelText();
  
  // Draw video outline
  videoOutline();
}

// Prepare label text and apperance 
function labelText(){
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 20);
}

// Place outline on video depending on item type 
function videoOutline(){
  
   switch (tempResult) {
    case itemType.aluminum:
      stroke('orange');
      break;
    case itemType.paper:
       stroke('blue');
      break;
    case itemType.plastic:
       stroke('yellow');
      break;
    case itemType.glass:
      stroke('green');
      break;
    case itemType.non_recyclable:
      stroke('brown');
      break;
    default:
       stroke('black'); 
  }
  strokeWeight(15);
  noFill();
  rect(2, 2, width-4, height-4);
  strokeWeight(2);

}

// Determine if item type is recyclable
function isRecyclable() {
  for(let i = 0; i < recyclableTypes.length; i++)
  {
    if(tempResult == recyclableTypes[i])
    {
      return true;
    }
  }
  return false;
}
  

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classifyStart(video, gotResult);
}

// When we get a result, display in label
function gotResult(results) {
  tempResult = results[0].label;
   label = "";
  if (isRecyclable())
  {
    label = "Recycle this it is..." + tempResult.toLowerCase();
  }
  else 
  {
    label = "Throw away this is..." + tempResult.toLowerCase();
  }
 

}