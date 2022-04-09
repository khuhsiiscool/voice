function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zudwvTmb3/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}


function gotResults(error,results){
    if(error){
        console.log(error);
     }
    else{
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("result.confidence").innerHTML='Accuracy -' + (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img1=document.ggetElementById('dweam');
img2=document.ggetElementById('tencoblade');
img3=document.ggetElementById('george');
img4=document.ggetElementById('wilubr');

if(results[0].label=="du-du du-du"){
    img1.src="dweam.gif";
    img2.src="tenco.jfif";
    img3.src="goggy.jfif";
    img4.src="will.jfif";

}else if(results[0].label=="tecnoblade died"){
    img1.src="dweam.jfif";
    img2.src="dablade.gif";
    img3.src="goggy.jfif";
    img4.src="will.jfif";

}else if(results[0].label=="scream"){
    img1.src="dweam.jfif";
    img2.src="tenco.jfif";
    img3.src="goggy.gif";
    img4.src="will.jfif";


}else if(results[0].label=="blue"){
    img1.src="dweam.jfif";
    img2.src="tenco.jfif";
    img3.src="goggy.jfif";
    img4.src="noooo l'manberg.gif";
}


}
}