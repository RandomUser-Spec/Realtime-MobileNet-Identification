//https://teachablemachine.withgoogle.com/models/rHSX0BF58/

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rHSX0BF58/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
}

function gotResults(error, results){
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("accuracy_object_name").innerHTML = (results[0].confidence*100).toFixed()+"%";
    }
}

confidence = "100"