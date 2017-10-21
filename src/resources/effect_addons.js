function addons()
{
	var canvas=document.getElementById("animation"),demo=canvas.getContext("2d"),largeur=window.innerWidth-10,hauteur=window.innerHeight-10;canvas.width=largeur;canvas.height=hauteur;var img=new Image;img.src="/resources/sprite-addons.png";var img_x=10,img_y=10,saut=0,stars=Array(1024);initStars();setInterval(loop,40);function randomRange(b,d){return Math.floor(Math.random()*(d-b-1))+b}
	function initStars(){for(var b=0;b<stars.length;b++)stars[b]={x:randomRange(-25,25),y:randomRange(-25,25),z:randomRange(1,42)}}
	function loop(){var b=largeur/2,d=hauteur/2;demo.fillStyle="rgb(0,0,0)";demo.fillRect(0,0,canvas.width,canvas.height);for(var a=0;a<stars.length;a++){stars[a].z-=.2;0>=stars[a].z&&(stars[a].x=randomRange(-25,25),stars[a].y=randomRange(-25,25),stars[a].z=42);var c=228/stars[a].z,e=stars[a].x*c+b;c=stars[a].y*c+d;if(0<=e&&e<=largeur&&0<=c&&c<=hauteur){var g=5*(1-stars[a].z/32),f=parseInt((1-stars[a].z/32)*hauteur);demo.fillStyle="rgb("+f+","+f+","+f+")";demo.fillRect(e,c,g,g)}}img_x=largeur/3+100*Math.cos(saut/
	30*Math.PI)+200*Math.sin(saut/90*Math.PI);img_y=hauteur/3+120*Math.cos(saut/50*Math.PI)+50*Math.sin(saut/40*Math.PI);demo.drawImage(img,img_x,img_y);saut++};

}

