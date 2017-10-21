function addons()
{
// ------ Init -------------
var canvas = document.getElementById('animation');
var demo = canvas.getContext('2d');

var largeur = window.innerWidth - 10; 
var hauteur = window.innerHeight - 10;

canvas.width = largeur;
canvas.height = hauteur;
// -------------------------

var img = new Image();
img.src = '/resources/sprite-addons.png';
var img_x=10;
var img_y=10;
var saut=0;

var stars = new Array(1024);
// -------------------------
     initStars();
     setInterval(loop,40);
	
    function randomRange(minVal,maxVal) {
      return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
    }
 
    function initStars() {
      for( var i = 0; i < stars.length; i++ ) {
        stars[i] = {
          x: randomRange(-25,25),
          y: randomRange(-25,25),
          z: randomRange(1,42)
         }
      }
    }
 
    function loop() {
      var halfWidth  = largeur / 2;
      var halfHeight = hauteur / 2;	
 
      demo.fillStyle = "rgb(0,0,0)";
      demo.fillRect(0,0,canvas.width,canvas.height);
			

      for( var i = 0; i < stars.length; i++ ) {
        stars[i].z -= 0.2;
 
        if( stars[i].z <= 0 ) {
          stars[i].x = randomRange(-25,25);
          stars[i].y = randomRange(-25,25);
          stars[i].z = 42;
        }
 
        var k  = 228.0 / stars[i].z;
        var px = stars[i].x * k + halfWidth;
        var py = stars[i].y * k + halfHeight;
 
        if( px >= 0 && px <= largeur && py >= 0 && py <= hauteur ) {
          var size = (1 - stars[i].z / 32.0) * 5;
          var shade = parseInt((1 - stars[i].z / 32.0) * hauteur);
          demo.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
          demo.fillRect(px,py,size,size);
        }
      }
      
      img_x = (largeur/3) + (Math.cos((saut / 30) * Math.PI) * 100) + (Math.sin((saut / 90) * Math.PI) * 200);
      img_y = (hauteur/3) + (Math.cos((saut / 50) * Math.PI) * 120) + (Math.sin((saut / 40) * Math.PI) * 50);
      demo.drawImage(img, img_x,img_y);
      
      saut++;
    }  
}

