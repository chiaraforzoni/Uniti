var moon;
var bombs = []
    bombSpeed = 6,
    xPosCorrectionScale = 1;;
var s;
var t;
var millis;
var interval;
var pointillismAreaHeight = 300,
    points = [],
    xPosCorrectionScale = 1,
    pointSizeRange = [5, 10];

//var victims = 0;

//var skylineHeight = windowHeight/2-40;
//var newSHeight = windowWidth*1530/2048;
//per cercare di non scrivere ogni volta la formula sulle stringhe di comando dello skyline ma se la applico non funziona//windowWidth*1530/2048

function preload() {
dresda=loadImage("assets/citta.png");
dresda2 = loadImage("assets/citta2.png");
dresda3 = loadImage("assets/citta3.png");
dresda4 = loadImage("assets/citta4.png");
dresda5 = loadImage("assets/citta5.png");
dresda6 = loadImage("assets/citta6.png");
dresda7 = loadImage("assets/citta7.png");
moon = loadImage("assets/moon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initWidth = windowWidth;
}


function draw() {
imageMode(CENTER);
    
  if(bombs.length < 100) {
        image(dresda, windowWidth/2, windowHeight/2, windowWidth, windowWidth*1530/2048);
    }
    if( bombs.length > 100 ) {
        image(dresda2, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048)
    } 
    if(bombs.length > 200) {
        image(dresda3, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    if(bombs.length > 300) {
        image(dresda4, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    if(bombs.length > 400) {
        image(dresda5, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    if(bombs.length > 500) {
        image(dresda6, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
     }
    if(bombs.length > 600) {
        image(dresda7, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
 for (var i = 0; i < bombs.length; i++) {
        if (bombs[i].y > height - pointillismAreaHeight) {
            var bomb = bombs[i];
            ellipse(bombs[i].x, bombs[i].y,50,50);
            bombs[i].y+=20;
            
            if (!points[i]) {
                points[i] = {
                    x: random(0, width),
                    y: random(height - pointillismAreaHeight, height),
                    size: random(pointSizeRange[0], pointSizeRange[1]),
                    color: "255",
                }
            }

            fill(bomb.color);
            noStroke();
            ellipse(bomb.x * xPosCorrectionScale, height - pointillismAreaHeight, bomb.size);
        } else {
            //scie
            fill('#A51800');
            noStroke();
            ellipse(bombs[i].x * xPosCorrectionScale, bombs[i].y,10);
            bombs[i].y += bombSpeed;
        }
    }
    
    
if (!points[i]) {
                points[i] = {
                    x: random(0, width),
                    y: random(height - pointillismAreaHeight, height),
                    size: random(pointSizeRange[1], pointSizeRange[2]),
                    color: "255",
                }
            }
    
var s = second() + 30
image(moon, width/5 +s, height/3 -s, 70, 70);
    
var interval = 120;
var millisecond = millis()
var t = interval-int(millis()/1000);
noStroke();
fill(180);
textSize(20);
text("Time",1345,55);
textSize(25);
t = interval - int(millis()/1000);
time = nf(t ,1);
interval+=10
text(t,1300,55);
    
noStroke();
fill(180);
textSize(20);
text("Victims",1345,80);
textSize(25);
text(s,1300, 80);

    if(t === 0){
    noStroke();
    fill(0, 0, 0);
    rect(0, 0, windowWidth, windowHeight);
    textSize(32);
    fill(250);
    textAlign(CENTER);
    text("Remember dresda", width/2, height/2);
    t(0,1); 
    }
    
/* drawPointillism();*/
}

function mouseReleased() {
  var newx = random()*width;
  var newSize = random(3,8);
  var newColor;
    var myRandom = random(0,1);
    if (myRandom <= 0.5) {
        newColor = color('#E52B50');
    } else {
        newColor = color('#A51800');
    }
    var obj = {x: newx, y: 0, size: newSize, color: newColor};
    bombs.push(obj);

    if (bombs.length > maxBombsCount) {
        bombs.shift();
    }

}

/*function drawPointillism() {
    // draw rect
    noStroke();
    fill(15);
    rect(0, height - pointillismAreaHeight, width, pointillismAreaHeight);

    // draw point
    for (var i in points) {
        var point = points[i];
        fill(80);
        noStroke();
        ellipse(point.x * xPosCorrectionScale, point.y, point.size);
    }*/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
