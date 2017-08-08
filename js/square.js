(function() {
    function Square( size = 50 ,x = 0, y = 0)
    {
        this.Shape_constructor();
        
        this.size = size;
        this.color = "DeepSkyBlue";
        this.isAlive = false;

        this.render();

        this.point = new Point( x, y );

        this.on("mouseover", this.onMouseOver, this);
        this.on("mouseout", this.onMouseOut, this);
        this.on("click", this.onClick, this);

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
        }
        p.onMouseOut = function( event )
        {
            this.alpha = (this.isAlive)?(.5):(.2);
        }
        p.onClick = function( event )
        {
            this.isAlive = (this.isAlive) ? ( false ) : ( true );
            this.onMouseOut();
        }
        p.updateAliveState = function( state )
        {
            this.isAlive = state;
            this.onMouseOut();
        }

    window.Square = createjs.promote( Square, "Shape" );
} () );