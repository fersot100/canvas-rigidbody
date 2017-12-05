import Vector2 from './vectors';
import Collider from './Collider';

export default class CircleCollider {
  constructor(radius = 30){
    this.radius = radius;
    this.pos = new Vector2(0,0);
    this.vel = new Vector2(0,0);
    this.colliderIndex = Collider.addCollider(this);
  }

  calculate(){
    Collider.updateCollider(this.colliderIndex, this.pos, this.vel);
  }
}