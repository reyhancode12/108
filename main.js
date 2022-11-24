function startClassification(){

navigator.mediaDevices.getUserMedia({audio: true})
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3LmvENuzu/model.json',modelReady)

}

function modelReady(){

classifier.classify(gotResults);


}
function gotResults(error,results){

if(error){

console.error(error);

}
else{

console.log(results);

document.getElementById("result_label").innerHTML="i can hear-"+results[0].label;
document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(3)+"%";
}

img=document.getElementById("alien_1");
img2=document.getElementById("alien_2");
img3=document.getElementById("alien_3");
img4=document.getElementById("alien_4");


if(results[0].label=="clap"){

img.src='aliens-01.gif';
img.src='aliens-02.png';
img.src='aliens-03.png';
img.src='aliens-04.png';

}
if(results[0].label=="a"){

img.src='aliens-01.png';
img.src='aliens-02.gif';
img.src='aliens-03.png';
img.src='aliens-04.png';

}

if(results[0].label=="b"){

    img.src='aliens-01.png';
    img.src='aliens-02.png';
    img.src='aliens-03.gif';
    img.src='aliens-04.png';

}
else{

    img.src='aliens-01.png';
    img.src='aliens-02.png';
    img.src='aliens-03.png';
    img.src='aliens-04.gif';

}
}