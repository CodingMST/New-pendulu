

constructor(x,y,width,height)
var box_options ={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;    
     World.add(world,this.body);
  
  
    display() 
     {  var pos=this.body.position;
           fill("white");
           imageMode(CENTER);
           image(this.image,pos.x,pos.y,this.width,this.height);
        }