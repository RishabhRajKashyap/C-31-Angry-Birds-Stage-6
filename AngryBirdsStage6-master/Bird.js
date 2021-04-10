class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    //this.array = [[1, 2],[3, 4],[5, 6]]
    //this.array[0][0] = 1
    //this.array[0][1] = 2
    //this.array[1][0] = 3
    //this.array[1][1] = 4
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x, this.body.position.y];
    this.trajectory.push(pos);
    }

    for (var i = 0; i<this.trajectory.length; i = i+1)
    {
      image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1]);
    }
    //console.log(this.trajectory);

  }
}
