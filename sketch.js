let x = [];



function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 200);
    noStroke();
    for (let a = 0; a < 1000; a++) {
        x[a] = random(0, 255);
    }


    
}

function draw() {

    if(mouseIsPressed) {
        for (let a = 0; a < x.length; a++  ) {
            fill(random(200,255),random(200,255),random(200,255) );
            x[a] += 10 ;
            rotate(50);
            ellipse(mouseX + x[a], mouseY + x[a], x[a]);
        }
    }

}