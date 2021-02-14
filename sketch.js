let c2; 

function setup() {
	createCanvas(600, 600);
	c2 = createGraphics(width, height);
	// c2.background(0);
}

let scl = 80;
let a = 0;

function draw() {
	background(0);
	image(c2, 0, 0);
	for(let i = scl; i <= width-scl; i += scl + 10){
		push();
		translate(i+ scl/2, scl/2);
		noFill();
		stroke(255);
		strokeWeight(3);
		ellipse(0, 0, scl);
		let x = scl/2 * cos(a * (i/scl));
		let y = scl/2 * sin(a * (i/scl));
		line(x, y, x, height);
		strokeWeight(15);
		point(x, y);
		pop();
	}
	for(let i = scl; i <= height-scl; i += scl + 10){
		push();
		translate(scl/2, i + scl/2);
		noFill();
		stroke(255);
		strokeWeight(3);
		ellipse(0, 0, scl);
		let x = scl/2 * cos(a * (i/scl));
		let y = scl/2 * sin(a * (i/scl));
		line(x, y, width, y);
		strokeWeight(15);
		point(x, y);
		pop();
	}
	for(let x = scl; x <= width-scl; x += scl + 10){
		for(let y = scl; y <= height-scl; y += scl + 10){
			c2.push();
			c2.translate(x+scl/2, y+scl/2);
			let x1 = scl/2 * cos(a * (x / scl));	
			let y1 = scl/2 * sin(a * (y / scl));	
			c2.stroke(255, 0, 0)
			c2.strokeWeight(3);
			c2.point(x1, y1);
			c2.pop();
			
		}
	}
	if(a >= TWO_PI){
		a = 0;
		c2.background(0);
	}
	a += 0.01;
}
