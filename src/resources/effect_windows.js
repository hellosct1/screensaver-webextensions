function windows() {
	// ------ Init -------------
	var canvas = document.getElementById('animation');
	var demo = canvas.getContext('2d');

	var largeur = window.innerWidth - 10;
	var hauteur = window.innerHeight - 10;

	canvas.width = largeur;
	canvas.height = hauteur;
	// -------------------------

	var vX = 9, vY = 9;

	var color = Math.floor(minMax(0, 360));

	var particles = [];
	var nodes = 4;

	while (nodes--) {
		particles[nodes] = new Pos(minMax(1, largeur), minMax(1, hauteur));
		particles[nodes].angle = minMax(0, Math.PI * 2);
	}

	function minMax(min, max) {
		return (Math.random() * (max - min)) + min;
	}

	function HSL(color, saturation, lightness) {
		return ("hsl(" + color + "," + saturation + "%," + lightness + "%)");
	}

	function Pos(x, y) {
		this.x = x;
		this.y = y;

		this.vX = vX;
		this.vY = vX;

		this.angle = 0;
	}

	Pos.prototype.move = function() {
		this.x += Math.cos(this.angle) * this.vX;
		this.y += Math.sin(this.angle) * this.vY;

		if (this.x <= 0 || this.x >= largeur) {
			this.vX = -(this.vX + minMax(-1, 1));
		}
		if (this.y <= 0 || this.y >= hauteur) {
			this.vY = -(this.vY + minMax(-1, 1));
		}
	};

	function main() {
		demo.globalCompositeOperation = "destination-out";
		demo.fillStyle = "rgba(0, 0, 0, 0.1)";
		demo.fillRect(0, 0, largeur, hauteur);
		demo.globalCompositeOperation = "lighter";
		demo.strokeStyle = HSL(Math.floor(color), 40, 40);

		for (var i = 0; i < particles.length; i++) {
			var p1 = particles[i];
			var p2 = particles[((i + 1) % particles.length)];

			demo.beginPath();
			demo.lineWidth = 1;
			demo.moveTo(p1.x, p1.y);
			demo.lineTo(p2.x, p2.y);
			demo.stroke();

			p1.move();
		}

		color = (color < 360) ? (color + 0.25) : 0;
	}
	setInterval(main, 30);
}
