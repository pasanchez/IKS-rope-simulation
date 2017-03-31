var Segment = Segment || {
    length: 10,
    angle: 0,
    x: 0,
    y: 0,
    parent: null,
    stroke: 5,

    create: function(x, y, angle, length, stroke) {
      var obj = Object.create(this);
      obj.length = length;
      obj.angle = angle;
      obj.x = x;
      obj.y = y;
      obj.stroke = stroke;

      return obj;
  },

    getBx: function()
    {
        return this.x + this.length * Math.cos(this.angle);
    },

    getBy: function(){
        return this.y + this.length * Math.sin(this.angle);
    },

    draw: function(context) {
        context.strokeStyle = "#ffffff";
        context.lineWidth = this.stroke;
        context.beginPath();
        context.moveTo(this.x,this.y);
        context.lineTo(this.getBx(),this.getBy());
        context.stroke();

        if (this.parent) {
            this.parent.draw(context);
        }
    },

    pointAt: function(x,y)
    {
        this.angle = Math.atan2(y-this.y,x-this.x);
    },

    moveto: function(x,y)
    {
        this.x = x - this.length * Math.cos(this.angle);
        this.y = y - this.length * Math.sin(this.angle);
    },

    follow: function(x,y)
    {
        this.pointAt(x,y);
        this.moveto(x,y);
        if (this.parent)
        {
            this.parent.follow(this.x,this.y);
        }
    }

}
