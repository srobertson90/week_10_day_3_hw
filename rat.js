var Rat = function(){
  this.health = 40;
  this.strength = 15;
};

Rat.prototype = {
  taint: function(food){
    food.poison();
  },
  takeDamage: function(damage){
    this.health = (this.health > damage) ? this.health - damage : 0;
  },
  attack: function(target){
    target.takeDamage(this.strength);
  }
};

module.exports = Rat;