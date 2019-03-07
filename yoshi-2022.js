
		var myFullpage = new fullpage('#fullpage', {
			anchors: ['yoshi2022', 'equipe', 'programme', 'quiz', 'boutique'],
			sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#C63D0F', '#1BBC9B'],
			navigation: false,
			recordHistory: false,
			fadingEffect:'section',
			navigationPosition: 'right',
			navigationTooltips: ['First page', 'Second page', 'Third and last page'],
			responsiveWidth: 900,
			afterResponsive: function(isResponsive){

			}

		});


		/*-------------------script-section-1----------------------*/


		var image = document.getElementById('kbg2');
		var imageCanvas = document.createElement('canvas');
		var imageCanvasContext = imageCanvas.getContext('2d');
		var lineCanvas = document.createElement('canvas');
		var lineCanvasContext = lineCanvas.getContext('2d');
		var pointLifetime = 1000;
		var points = [];

		if (image.complete) 
		{
			start();
		} 
		else 
		{
			image.onload = start;
		}


		/* Attache les évenements qui ont été capté et lance l'effet. */


		function start() 
		{
			document.addEventListener('mousemove', onMouseMove);
			window.addEventListener('resize', resizeCanvases);
			document.getElementById('itouch').appendChild(imageCanvas);
			// $('#id').appendChild(imageCanvas);
			resizeCanvases();
			tick();
		}


		/* Enregistre la position du curseur de l'utilisateur. 

		@param {!MouseEvent} event */


		function onMouseMove(event) 
		{
			points.push(
			{
				time: Date.now(),
				x: event.clientX,
				y: event.clientY
			});
		}


		/* Redimensionne les deux canvas pour remplir la fenêtre. */


		function resizeCanvases() 
		{
			imageCanvas.width = lineCanvas.width = window.innerWidth - 1;
			imageCanvas.height = lineCanvas.height = window.innerHeight -9;
		}


		/* La boucle principale, appelée à ~ 60hz. */


		function tick() 
		{
		  // Supprime les anciens points
		  points = points.filter(function(point) 
		  {
		  	var age = Date.now() - point.time;
		  	return age < pointLifetime;
		  });

		  drawLineCanvas();
		  drawImageCanvas();
		  requestAnimationFrame(tick);
		}


		/* Dessine une ligne en utilisant les positions du curseur enregistrées. 

		Cette ligne est utilisée pour masquer l'image d'origine. */


		function drawLineCanvas() 
		{
			var minimumLineWidth = 25;
			var maximumLineWidth = 200;
			var lineWidthRange = maximumLineWidth - minimumLineWidth;
			var maximumSpeed = 50;

			lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
			lineCanvasContext.lineCap = 'round';
			lineCanvasContext.shadowBlur = 30;
			lineCanvasContext.shadowColor = '#000';

			for (var i = 1; i < points.length; i++) 
			{
				var point = points[i];
				var previousPoint = points[i - 1];

		    // Change la largeur de la ligne en fonction de la vitesse
		    var distance = getDistanceBetween(point, previousPoint);
		    var speed = Math.max(0, Math.min(maximumSpeed, distance));
		    var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
		    lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;

		    // Fade points as they age
		    var age = Date.now() - point.time;
		    var opacity = (pointLifetime - age) / pointLifetime;
		    lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';
		    
		    lineCanvasContext.beginPath();
		    lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
		    lineCanvasContext.lineTo(point.x, point.y);
		    lineCanvasContext.stroke();
		 }
		}


		/* @param {{x: number, y: number}} a @param {{x: number, y: number}} b @return {number} 

		La distance entre le point a et le point b */


		function getDistanceBetween(a, b) 
		{
			return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
		}


		/* Dessine l'image d'origine, masquée par la ligne tracée dans drawLineToCanvas. */


		function drawImageCanvas() 
		{
		  // Imite background-size: cover
		  var width = imageCanvas.width;
		  var height = imageCanvas.width / image.naturalWidth * image.naturalHeight;
		  
		  if (height < imageCanvas.height) 
		  {
		  	width = imageCanvas.height / image.naturalHeight * image.naturalWidth;
		  	height = imageCanvas.height;
		  }

		  imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
		  imageCanvasContext.globalCompositeOperation = 'source-over';
		  imageCanvasContext.drawImage(image, 0, 0, width, height);
		  imageCanvasContext.globalCompositeOperation = 'destination-in';
		  imageCanvasContext.drawImage(lineCanvas, 0, 0);
		}

		var up = document.getElementById("kinfo");
		var turn = document.getElementById("karrow");
		var text = document.getElementById("ktext");
		var compt = 0;
		turn.style.transform = "rotate(180deg)";
		function upTheTitle()
		{
			if (compt == 0)
			{
				up.style.marginTop = "-1vh";
				turn.style.transform = "rotate(0deg)";
				text.style.display = "inline";
				compt += 1; 
			}
			else
			{
				compt = 0;
				turn.style.transform = "rotate(180deg)";
				text.style.display = "none";
				up.style.marginTop = "0vh";							
			}
		}


		/*-------------------script-section-2----------------------*/


		var carousel = $(".carousel"),
		items = $(".item"),
		currdeg  = 0;

		$(".next").on("click", { d: "n" }, rotate);
		$(".prev").on("click", { d: "p" }, rotate);

		function rotate(e){
			if(e.data.d=="n"){
				currdeg = currdeg - 60;
			}
			if(e.data.d=="p"){
				currdeg = currdeg + 60;
			}
			carousel.css({
				"transform": "rotateY("+currdeg+"deg)"
			});
			items.css({
				"transform": "rotateY("+(-currdeg)+"deg)"
			});
		}

		/*-------------------script-section-3----------------------*/


		/*-------------------script-section-4----------------------*/
			
			document.getElementById("RCpipe").addEventListener('mouseover', function() {
			document.getElementById("yoshiH").style.transform = "translate(0px, -300px)";
			});
			
			document.getElementById("RCpipe").addEventListener('mouseout', function() {
			document.getElementById("yoshiH").style.transform = "translate(0px, 300px)";
			});
		  
			document.getElementById("slide4-1").addEventListener('mouseover', function() {
			document.getElementById("RCpipe").style.opacity = "1";
			});		  

		/*-------------------script-section-5----------------------*/


		/*-------------------script-section-end----------------------*/
