class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.path = [];

  }

  display() {
    
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    
    if(this.body.position.x > 200 && this.body.velocity.x > 8){
      var position =[this.body.position.x,this.body.position.y];
      this.path.push(position);
    }

    //this.path = [[200,100] ,[210,220] ,[230,220]  ]
    
    for(var num=0; num < this.path.length ; num++){
      image(this.smoke, this.path[num][0] ,this.path[num][1]  )
    }

  }
}
