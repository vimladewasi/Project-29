class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
  //  attach(body){
    //    this.sling.bodyA = polygon;
    //}
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
        //    line(bodyA.x, bodyA.y, pointB.x, pointB.y);
            if(pointA.x<400){
                strokeWeight(5);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            }
            else {
                strokeWeight(3);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
             }
        }
    }
    
}
