function Grid ( x, y )
{
    this.x = x;
    this.y = y;
    this.createList(x,y);
}

Grid.prototype.createList = function(x,y)
{
	this.list = new Array(y);
	for(var i = 0; i < y; i++)
	{
		this.list[i] = new Array(x);
	}
}

Grid.prototype.add = function(obj, x, y )
{
	this.list[y][x] = obj;
};

Grid.prototype.remove = function( x, y )
{
	this.list[y][x] = null;
}

Grid.prototype.clear = function()
{
	this.createList(this.x, this.y);
}

Grid.prototype.isGridEmpty = function()
{
	if(this.getObjects().length <= 0)
		return true;
	return false;
}

Grid.prototype.getObject = function( x, y )
{
	return this.list[y][x];
}

Grid.prototype.getObjects = function()
{
	var objs = new Array();
	for( var y = 0; y < this.y; y++)
	{
		for( var x = 0; x < this.x; x++ )
		{
			var obj = this.list[y][x];
			if(obj)
			{
				objs.push( obj );
			}
		}
	}
	return objs;
}

Grid.prototype.moveObjectTo = function( obj, x, y)
{
	var currentPosition = this.getPosition(obj);
	this.remove(currentPosition.x, currentPosition.y);

	if( this.getObject(x,y) != null)
		console.log("[WARNING] Removing Item in Grid at Filled Position:"+x+"x"+y);
	
	this.add(obj,x,y);
}

Grid.prototype.getPosition = function( obj )
{
	for(var x in this.list)
	{
		for(var y in this.list[x])
		{
			if(this.list[y][x] == obj)
			{
				var pos = new Object();
					pos.x = parseInt(x);
					pos.y = parseInt(y);

				return pos;
			}
		}
	}

	return null;
}