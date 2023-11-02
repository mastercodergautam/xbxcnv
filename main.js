x = 0;
y = 0;

draw_apple = "";
apple=""
speak_data=""
to_number=""
function preload(){
  apple=loadImage("apple.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
to_number=Number(content);
if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "started to draw apple"; 
  draw_apple="set"

}
else{
  document.getElementById("status").innerHTML = "The speech has not recognized as number: " ; 
 
}
document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}
screen_width=window.innerWidth;
screen_height=window.innerHeight;

function setup() {
 canvas=createCanvas(screen_width,screen_height-150);
 canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*1800);
      y=Math.floor(Math.random()*700);
      image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;
speak_data=to_number+" apples drawn"
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
