var square;
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
	grid = new VirtualGrid( 2 );
	square = new Square( 50 );
	
	container.addChild( square );
}

function mouseDown( event )
{
	var mp = currentMousePosition = container.globalToLocal( stage.mouseX , stage.mouseY ) ;
	var pos = grid.PositionToGrid( mp.x, mp.y );
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