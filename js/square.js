(function() {
    function Square( size = 50)
    {
        this.Shape_constructor();
        
        this.size = size;
        this.color = "DeepSkyBlue";

        this.render();

        this.on("mouseover", this.onMouseOver, this);
        this.on("mouseout", this.onMouseOut, this);

        this.onMouseOut();
    }

    var p = createjs.extend( Square, createjs.Shape );
        p.render = function()
        {
            this.graphics.clear().beginFill(this.color).rect(0,0,this.size,this.size).endFill();            
        }
        p.onMouseOver = function( event )
        {
            this.alpha = 1;
            console.log("hey");
        }
        p.onMouseOut = function( event )
        {
            this.alpha = .2;
        }
	    p.output = function()
	    {
	    	console.log("Console Output Test.");
	    };

    window.Square = createjs.promote( Square, "Shape" );
} () );