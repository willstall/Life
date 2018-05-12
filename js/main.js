var currentPresses = 0;
var currentLevel = 0;
var pressLimit = 1;

var virtualGrid;
var grid;

function main()
{	
	// Setup
	setup();

	// Listeners
	// document.onkeydown = keyPressed;
	// document.onmousedown = ( mouseDown ).bind( this );
	stage.on("pressup", mouseUp ).bind( this );
	// stage.on("tick", update, this);

	// Init	
	var gridSize = 24;
	var squareSize = this.canvas.width / gridSize;

	grid = new Grid(gridSize,gridSize);
	virtualGrid = new VirtualGrid( squareSize );
	
	for( var y = 0; y <= gridSize - 1; y++)
	{
		for( var x = 0; x <= gridSize - 1; x++)
		{
			var pt = virtualGrid.GridToPosition( x , y );

			var square = new Square( squareSize , x , y );
				square.x = pt.x
				square.y = pt.y;
				square.updateAliveState( (Math.random() >= .5 ) ? ( true ) : ( false ) );
			
			grid.add( square, x, y );
			stage.addChild( square );
		}
	}
}

function mouseUp( event )
{
	//console.log( event );
	var pos = virtualGrid.PositionToGrid( stage.mouseX, stage.mouseY );
	var mouseObj = grid.getObject( pos.x, pos.y );

	currentPresses++;

	if(currentPresses == pressLimit)
	{
		currentPresses = 0;
		currentLevel++;

		var deadObjects = new Array();
		var aliveObjects = new Array();
		var objs = grid.getObjects();

		for(var i = 0; i < objs.length; i++)
		{
			var obj = objs[i];

			if(obj.isAlive == true)
			{
				var neighborCount = getNeighborCount(obj.point.x, obj.point.y, true);
				
				if(neighborCount == 0 || neighborCount == 4)
				{
					deadObjects.push( obj );
				}
			}else{
				var neighborCount = getNeighborCount(obj.point.x, obj.point.y, false);
				
				if(neighborCount == 3 )
				{
					aliveObjects.push( obj );
				}	
			}
		}

		for(var d = 0; d < deadObjects.length; d++)
		{
			var deadObj = deadObjects[d];
				deadObj.updateAliveState( false );
		}

		for(var d = 0; d < aliveObjects.length; d++)
		{
			var aliveObj = aliveObjects[d];
				aliveObj.updateAliveState( true );
		}

		console.log("[ game updated ]");	

		// Alive cells with exactly two or three alive neighbors live on.
		// Dead cells with exactly three alive neighbors become alive.
	}
}

function getNeighborCount( x, y , checkState)
{
    var count = 0;
	var objCheck;

    if( x > 0 && x < grid.x-1)
    {
		if( checkObjectState( x+1,y, checkState ))
			count++;

		if( checkObjectState( x-1,y, checkState ))
			count++;   
    }

    if( y > 0 && y < grid.y-1)
    {
		if( checkObjectState( x,y+1, checkState ))
			count++;

		if( checkObjectState( x,y-1, checkState ))
			count++;       
    }

    return count;
}

function checkObjectState( x,y, stateCheck )
{
	var objCheck = grid.getObject( x , y );
	if(objCheck != null && objCheck.isAlive == stateCheck)
		return true;

	return false;
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