var virtualGrid;
var grid;

function main()
{	
	// Setup
	setup();

	// Listeners
	document.onkeydown = keyPressed;
	document.onmousedown = ( mouseDown ).bind( this );
	document.onmouseup = ( mouseUp ).bind( this );
	stage.on("tick", update, this);

	// Init
	var count = 20;
	var squareSize = this.canvas.width / count;
	grid = new Grid(count,count);
	virtualGrid = new VirtualGrid( squareSize );
	
	
	for( var x = 0; x <= count - 1; x++)
	{
		for( var y = 0; y <= count - 1; y++)
		{
			var pt = virtualGrid.GridToPosition(x,y);
			var square = new Square( squareSize );
			square.x = pt.x
			square.y = pt.y;
			grid.add(square, x, y);
			stage.addChild( square );
		}
	}
	container.addChild( square );
}

function mouseDown( event )
{
	// var mp = currentMousePosition = container.globalToLocal( stage.mouseX , stage.mouseY ) ;
	var pos = virtualGrid.PositionToGrid( stage.mouseX, stage.mouseY );
	console.log( pos );
}

function mouseUp( event )
{

}

function update( event )
{
	// console.log("hey");
}

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	if( event.keyCode == 32 )
	{
		console.log("testing");
	}
}