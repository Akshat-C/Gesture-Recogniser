Webcam.set({
    height: 250,
    width: 250,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera")

function take_img()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src="+data_uri+" id='results_img'>"
    });
}

console.log("ml5 version: ", ml5.version);
c = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/maClsFUr1/model.json", modelLoaded);

function modelLoaded()
{
    console.log("Model is successfully loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    sd1 = "The first prediction is: " + prediction1 + "and";
    sd2 = "The second prediction is:" + prediction2;
    var utt = window.SpeechSynthesisUtterance(sd1 + sd2)
    synth.speak(utt);
}