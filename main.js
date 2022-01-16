function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iMnLrqDae/model.json', modelReady);

}

function modelReady() {
    Classifier.Classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255 + 1);
        random_number_g = Math.floor(Math.random() * 255 + 1);
        random_number_b = Math.floor(Math.random() * 255 + 1);
        document.getElementById("result_label").innerHTML = 'i can hear -' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'accuracy -' + results[0].confidence*100.toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img1 = document.getElementById("Alien01");
        img2 = document.getElementById("Alien02");
        img3 = document.getElementById("Alien03");
        img4 = document.getElementById("Alien04");
        if (results[0].label=="Barking") {
            document.getElementById(result_image).innerHTML = 'Dog.png'
        }
        else if (results[0].label=="Meowing") {
            document.getElementById(result_image).innerHTML = 'Cat.png'
        }
        else if (results[0].label=="Mooing") {
            document.getElementById(result_image).innerHTML = 'Cow.png'
        }
        else {
            document.getElementById(result_image).innerHTML = 'Lion.png'
        }
        
    }
}

/!-function toFixed() {}-/