(function() {
    function Square( size = 50)
    {
        this.Shape_constructor();
        
        this.size = size;
        this.color = "DeepSkyBlue";

        this.render();
    }

    var p = createjs.extend( Square, createjs.Shape );
        p.render = function()
        {
            this.graphics.clear().beginFill(this.color).rect(0,0,this.size,this.size).endFill();            
        }
	    p.output = function()
	    {
	    	console.log("Console Output Test.");
	    };

    window.Square = createjs.promote( Square, "Shape" );
} () );