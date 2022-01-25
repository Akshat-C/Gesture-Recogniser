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
    var utt = new SpeechSynthesisUtterance(sd1 + sd2)
    synth.speak(utt);
}

function result()
{
    img = document.getElementById("results_img")
    c.classify(img, gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    } else 
    {
        console.log(results)
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        document.getElementById("gesture1_name").innerHTML = prediction1;
        document.getElementById("gesture2_name").innerHTML = prediction2;
    }

    if (prediction1 == "Thumbs Up")
    {
        document.getElementById("gesture1_img").innerHTML = "&#128077;";
    } else if (prediction1 == "Thumbs Down")
    {
        document.getElementById("gesture1_img").innerHTML = "&#128078;";
    } else if (prediction1 == "Victory")
    {
        document.getElementById("gesture1_img").innerHTML = "&#129304;";
    } else if (prediction1 == "Stop")
    {
        document.getElementById("gesture1_img").innerHTML = "&#128400;";
    } else if (prediction1 == "Peace Sign")
    {
        document.getElementById("gesture1_img").innerHTML = "&#9996;"
    } else if (prediction1 == "Amazing")
    {
        document.getElementById("gesture1_img").innerHTML = "&#128076;";
    }

    if (prediction2 == "Thumbs Up")
    {
        document.getElementById("gesture2_img").innerHTML = "&#128077;";
    } else if (prediction2 == "Thumbs Down")
    {
        document.getElementById("gesture2_img").innerHTML = "&#128078;";
    } else if (prediction2 == "Victory")
    {
        document.getElementById("gesture2_img").innerHTML = "&#129304;";
    } else if (prediction2 == "Stop")
    {
        document.getElementById("gesture2_img").innerHTML = "&#128400;";
    } else if (prediction2 == "Peace Sign")
    {
        document.getElementById("gesture2_img").innerHTML = "&#9996;"
    } else if (prediction2 == "Amazing")
    {
        document.getElementById("gesture2_img").innerHTML = "&#128076;";
    }
}