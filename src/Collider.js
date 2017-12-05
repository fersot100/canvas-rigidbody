function distance(v1, v2) {
  const xDist = v2.x - v1.x;
  const yDist = v2.y - v1.y;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

export default class Collider {

    static colliders = [];
    static colliderAmount = -1;
  

  static addCollider(newCollider){
    Collider.colliderAmount++;
    Collider.colliders.push(newCollider);
    Collider.updateCollider(Collider.colliderAmount);
    return Collider.colliderAmount;
  }

  static updateCollider(colliderIndex, pos, vel){
    Collider.colliders.forEach((collider, i) => {
      if(i !== colliderIndex){
        if(distance(collider.pos, Collider.colliders[colliderIndex].pos) <= collider.radius + Collider.colliders[colliderIndex].radius){
          const angleDeg = Math.atan2(collider.pos.y - Collider.colliders[colliderIndex].pos.y, collider.pos.x - Collider.colliders[colliderIndex].pos.x) * 180 / Math.PI;
          console.log(angleDeg);
        }
      }
    });
  }
}
