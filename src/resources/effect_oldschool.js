function anim (item)
{ 
// ------ Init -------------
var canvas = document.getElementById('animation');
var demo = canvas.getContext('2d');

var largeur = window.innerWidth - 10; 
var hauteur = window.innerHeight - 10;

canvas.width = largeur;
canvas.height = hauteur;
// -------------------------

var firstText = item.settings['textanim'];
var scrollText = item.settings['message'];
var secondText = item.settings['secondText'];
var spriteAtari = item.settings['sprite'];

if (spriteAtari == true)
{
var img = new Image();
img.src = '/resources/atari.svg';
var img_x=10;
var img_y=10;
}

var fondhautimg = new Image();
fondhautimg.src =  '/resources/fond-haut.png';

var fondbasimg = new Image();
fondbasimg.src =  '/resources/fond-bas.png';


// champ étoiles
var stars=[]; 
function newStar()
{ 
	return {
	  x: (Math.random() * 600) - 300, 
	  y: (Math.random() * 200) - 100 
	}; 
} 

i = 10;

while(i<300)
{ 
	stars.push(newStar()); 
	i++; 
} 

function renderStars()
{ 
	var newx;
	var newy; 
	i=100; 
	demo['beginPath'](); 
	while(i<200)
	{ 
		stars[i].x += stars[i].x /4 ; 
		stars[i].y += stars[i].y / 30; 
		
		newx = stars[i].x + 1; 
		newy = stars[i].y + 310; 

		demo.moveTo(newx, newy+2); 
		demo.lineTo(newx + 8, newy);
		
	if (newx < 0 || newx > largeur || newy < 10 || newy > hauteur) 
	 	stars[i] = newStar(); 
 	i++; 
	} 
	demo.stroke(); 
} 

var saut = 0;
var debut = 0;

function boucle()
{ 
	demo.fillRect(0,0,largeur,hauteur); 
	demo.drawImage(fondhautimg, 0,0, largeur,100);
	demo.drawImage(fondbasimg,0, hauteur-100, largeur,100);
	demo.strokeStyle = '#22AAAA'; 
	demo.stroke(); 
	
	grd=demo.createLinearGradient(Math.cos((saut / 42) * Math.PI) * 18, 14,largeur-(largeur/4) ,hauteur/3);
	grd.addColorStop(0,"#CC7777");
	grd.addColorStop(0.1,"#00FFFF");
	grd.addColorStop(0.3,"#999919");
	grd.addColorStop(0.5,"#559555");
	grd.addColorStop(0.7,"#0000FF");
	grd.addColorStop(0.9,"#559555");
	grd.addColorStop(1,"#999919");
	demo.fillStyle = grd;

	demo.font = "bold italic 80px Arial";
	demo.fillText(firstText,(largeur/3)+Math.cos((saut / 56) * Math.PI) * 360, 140+(largeur/6)+Math.sin((saut / 40) * Math.PI) * 101);

	demo.font = "bold italic 60px Arial";
	demo.fillText(secondText, 6+(largeur/2)+Math.sin((saut / 40) * Math.PI) * 120, 140+(largeur/6) + Math.cos((saut / 56) * Math.PI) * 60);

	i = 0;
	demo.font = "28px Courrier"; 
  	demo.fillStyle = "rgb(200,200,200)";
	while(i < scrollText.length)
	{   
		var left = (largeur - (debut * 4)) + (i * 22);
		var y = (hauteur - 30) + (Math.sin(((saut + i ) / 50) * Math.PI) * 30);
		demo.fillText(scrollText.charAt(i), left , y ); 
		
		if(i == scrollText.length-1 && left < 0) 
			debut = 0;

		i++; 
	} 
	debut++; 

	if (spriteAtari == true)
	{
		img_x = (largeur/3) + (Math.cos((saut / 30) * Math.PI) * 100) + (Math.sin((saut / 90) * Math.PI) * 200);
		img_y = (hauteur/3) + (Math.cos((saut / 50) * Math.PI) * 120) + (Math.sin((saut / 40) * Math.PI) * 50);
		demo.drawImage(img, img_x,img_y);      
	}
  
	demo.fillStyle = "rgb(0,0,0)";
	renderStars(); 
	saut++; 
} 

setInterval(boucle, 40); 
}

