A_RADIAN = 0.0174532925;

getLetterPaths = function(letter, posX, posY, size) {
	
	var letter = letter,
		posX = posX,
		poxY = posY,
		size = size;
	
	// Each letters paths
	if (letter == 'c') {
		return [	false,
					[posX, posY, size, (30 * A_RADIAN), (-30 * A_RADIAN), false],
					[posX-(size/(size/1.8)), posY, size/2, -30 * A_RADIAN, 30 * A_RADIAN, true]
				]
		
	} else if (letter == 'r') {
		return [	true,
					[posX - (size), posY + (size)],
					[posX - (size), posY - (size)],
					[posX + (size / 4), posY - (size)],
					[posX + (size / 4), posY - (size / 2.25), size / 1.8, -90 * A_RADIAN, 90 * A_RADIAN, false],
					[posX + (size / 1.1), posY + (size)],
					[posX + (size / 3.5), posY + (size)],
					[posX - (size / 3), posY + (size / 6)],
					[posX - (size / 3), posY + (size)]
		]
		
	} else if (letter == 'e') {
		return [	true,
					[posX - (size), posY + (size)],
					[posX - (size), posY - (size)],
					[posX + (size / 1.8), posY - (size)],
					[posX + (size / 1.8), posY - (size / 2)],
					[posX - (size / 2.5), posY - (size / 2)],
					[posX - (size / 2.5), posY - (size / 4)],
					[posX + (size / 1.8), posY - (size / 4)],	
					[posX + (size / 1.8), posY + (size / 5)],
					[posX - (size / 2.5), posY + (size / 5)],
					[posX - (size / 2.5), posY + (size / 2)],
					[posX + (size / 1.8), posY + (size / 2)],
					[posX + (size / 1.8), posY + (size / 2)],
					[posX + (size / 1.8), posY + (size)]
		]
		
		
	} else if (letter == 'a') {
		return [	true,
					[posX - (size), posY + (size)],
					[posX - (size / 4), posY - (size)],
					[posX + (size / 4), posY - (size)],
					[posX + (size), posY + (size)],	
					[posX + (size / 2.5), posY + (size)],
					[posX + (size / 3.5), posY + (size / 1.6)],
					[posX - (size / 3.5), posY + (size / 1.6)],
					[posX - (size / 2.5), posY + (size)]
		]
		
		
	} else if (letter == 't' ) {
		return [	true,
					[posX - (size / 2), posY + (size)],
					[posX - (size / 2), posY - (size / 2)],
					[posX - (size), posY - (size / 2)],
					[posX - (size), posY - (size)],
					[posX + (size / 1.6), posY - (size)],
					[posX + (size / 1.6), posY - (size / 2)],
					[posX + (size / 8), posY - (size / 2)],
					[posX + (size / 8), posY + (size)]
		]
		
	} else if (letter == 'i') {
		return [	true,
					[posX - (size / 2), posY + (size)],
					[posX - (size / 2), posY - (size)],
					[posX + (size / 8), posY - (size)],
					[posX + (size / 8), posY + (size)]					
		]			
		
	} else if (letter == 'v') {
		return [	true,
					[posX - (size / 4), posY + (size)],
					[posX - (size), posY - (size)],
					[posX - (size / 2.5), posY - (size)],
					[posX , posY + (size / 4)],
					[posX + (size / 2.5), posY - (size)],
					[posX + (size), posY - (size)],
					[posX + (size / 4), posY + (size)]		
		]		
		
	} else if (letter == 'j') {
		return [	false,
					[posX, posY - (size / 8) + (size / 2.5), size / 1.35, 180 * A_RADIAN, 0 * A_RADIAN, true],
					[posX + (size / 1.35), posY - (size)],
					[posX + (size / 6), posY - (size)],
					[posX + (size / 6), posY + (size / 4)],
					[posX - (size / 20) , posY + (size / 4), size / 4.5, 0 * A_RADIAN, 180 * A_RADIAN, false]	
		]
		
	} else if (letter == 's') {
		return [	false,
					[posX - (size / 1.5), posY + (size)],
					[posX + (size / 7), posY + (size / 2.5), size / 1.65, 90 * A_RADIAN, -90 * A_RADIAN, true],
					[posX - (size / 7), posY - (size / 2.5), size / 8, 90 * A_RADIAN, -90 * A_RADIAN, false],
					[posX + (size / 2), posY - (size) / 1.9],
					[posX + (size / 1.4), posY - (size) ],
					[posX - (size / 7), posY - (size / 2.6), size / 1.65, -90 * A_RADIAN, 90 * A_RADIAN, true],
					[posX + (size / 7), posY + (size / 2.5), size / 8, -90 * A_RADIAN, 90 * A_RADIAN, false],	
					[posX - (size / 2.2), posY + (size / 1.9) ]	
		]
		
	} else if (letter == 'p') {
		return [	true,
					[posX - (size), posY + (size)],
					[posX - (size), posY - (size)],
					[posX + (size / 7) , posY - (size / 2.5), size / 1.7, -90 * A_RADIAN, 90 * A_RADIAN, false],
					[posX - (size / 3), posY + (size) / 5],
					[posX - (size / 3), posY + (size)]		
		]	
		
	} 
	
	
}


function letters(posx, posy, size) {
	
// Settings
	this.posX = posx; 
	this.posY = posy; 
	this.size = size;
	this.velX = 0; 
	this.velY = 0;
	this.gravity = 0; 
	this.drag = 0.96;
	this.lineWidth = 3;
	this.color = 'black';
	
		
// Update: For updating a pre existing particle
	
	this.update = function() {
		
		// Position
		this.posX += this.velX ;
		this.posY += this.velY;
		
		// Gravity
		this.velY += this.gravity; 
		
		// drag
		this.velX *= this.drag; 
		this.velY *= this.drag;
		
	};
	
// Render a letter.  
// Accepts Context, Array of x+y cordinate pairs, Boolean: Should we use move to first?
// Might not be the best way to do it, but the idea is one function can render all the letters.
	this.render = function(c, letter) {

		c.lineWidth = this.lineWidth; 
		c.strokeStyle = this.color;
		c.beginPath();
		
		var paths = getLetterPaths(letter, this.posX, this.posY, this.size);

		// If Movefirst Move the pointer to thefirst co-ordinates in paths then add 1 to i
		if (paths[0] == true) {
			c.moveTo(paths[1][0], paths[1][1]);
		} 
		
		var i = 1;
		for (i; i<paths.length; i++) {
			
			
			if (paths[i].length == 2) {
				// There are only 2 co-ordiates.  its a line. Render a line
				c.lineTo(paths[i][0], paths[i][1]);	

			} else {
				// The co-ordiantes have more than 2 values.  its an arc. Render an arc
				c.arc(paths[i][0], paths[i][1], paths[i][2], paths[i][3], paths[i][4], paths[i][5]);
				
				
			}
			
		}
		
		c.closePath();
		c.stroke();	
		
	}
	
	
}
