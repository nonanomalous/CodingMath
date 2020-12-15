var particle = {
  position: null,
  velocity: null,
  friction: null,
  mass: 1,
  radius: 0,
  bounce: -1,

  create: function (x, y, speed, direction, grav, fric) {
    var obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.friction = vector.create(fric || 0, fric || 0);
    obj.velocity.setLength(speed);
    obj.velocity.setAngle(direction);
    obj.gravity = vector.create(0, grav || 0);
    return obj;
  },

  accelerate: function (accel) {
    this.velocity = this.velocity.add(accel);
  },

  update: function () {
    this.velocity = this.velocity.add(this.gravity);
    this.position = this.position.add(this.velocity);

    this.friction.setAngle(this.velocity.getAngle());
    if (this.velocity.getLength() > this.friction.getLength()) {
      this.velocity = this.velocity.subtract(this.friction);
    } else {
      this.velocity.setLength(0);
    }
  },
  angleTo: function (p2) {
    return Math.atan2(
      p2.position.getY() - this.position.getY(),
      p2.position.getX() - this.position.getX()
    );
  },
  distanceTo: function (p2) {
    var dx = p2.position.getX() - this.position.getX(),
      dy = p2.position.getY() - this.position.getY();
    return Math.sqrt(dx * dx + dy * dy);
  },
  gravitateTo: function (p2) {
    var grav = vector.create(0, 0),
      dist = this.distanceTo(p2);

    grav.setLength(p2.mass / (dist * dist));
    grav.setAngle(this.angleTo(p2));
    this.velocity = this.velocity.add(grav);
  },
};
