var currentPresses = 0;
var currentLevel = 0;

var virtualGrid;
var grid;

function main()
{	
	// Setup
	setup();

	// Listeners
	// document.onkeydown = keyPressed;
	document.onmousedown = ( mouseDown ).bind( this );
	// document.onmouseup = ( mouseUp ).bind( this );
	// stage.on("tick", update, this);

	// Init
	var presses = 3;
	var gridSize = 20;
	var squareSize = this.canvas.width / gridSize;

	grid = new Grid(gridSize,gridSize);
	virtualGrid = new VirtualGrid( squareSize );
	
	for( var x = 0; x <= gridSize - 1; x++)
	{
		for( var y = 0; y <= gridSize - 1; y++)
		{
			var pt = virtualGrid.GridToPosition( x , y );

			var square = new Square( squareSize , x , y );
				square.x = pt.x
				square.y = pt.y;

			grid.add( square, x, y );
			stage.addChild( square );
		}
	}
	
}

function mouseDown( event )
{
	var pos = virtualGrid.PositionToGrid( stage.mouseX, stage.mouseY );
	var obj = grid.getObject( pos.x, pos.y );
}




// function update( event )
// {
// 	// console.log("hey");
// }

// function mouseUp( event )
// {

// }

// function keyPressed( event )
// {
// 	//Keycodes found at http://keycode.info
// 	if( event.keyCode == 32 )
// 	{
// 		console.log("testing");
// 	}
// }