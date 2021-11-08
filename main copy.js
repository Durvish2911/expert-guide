kargil_war="";
var object=[];
sound="";
function preload(){
    sound=loadSound("alarm_buzzer_1999.mp3");
}
function draw(){
    image(video,0,0,580,480);
    if(kargil_war !=""){
     for(i=0;i<object.lenght;i++){
      document.getElementById("no_of_objects1").innerHTML="status:- dectected baby";
fill("navy");
var p=floor(object[i].confidence *100);
text(object[i].label+" "+p+" % ",object[i].x+15,object[i].y+15);
nofill();
stroke("green");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
     }
    }else{

    }
}
function setup(){
    canvas=createCanvas(580,480);
    canvas.center();
    video=createCapture();
    video.hide();
}
function start(){
OD=ml5.objectDectector('cocossd',enjoyloaded)
document.getElementById("no_of_objects1").innerHTML="searching for any baby";
}
function enjoyloaded(){
    console.log("INS Vikaramaditya is loaded and ready to fight with pakistan");
    kargil_war=true;

}
