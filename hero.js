var Hero = function(inputName, inputFavFood){
  this.name = inputName ? inputName : "Nameless Hero";
  this.favFood =  inputFavFood ? inputFavFood : "cheese";
  this.health = 100;
  this.strength = 25;
};

Hero.prototype = {
  speak: function(){
    talk =  "My name is " + this.name + ".";
    return talk;
  },
  takeDamage: function(damage){
    this.health = (this.health > damage) ? this.health - damage : 0;
  },
  healDamage: function(healing){
    this.health = (this.health + healing < 100) ? this.health + healing: 100;
  },
  eat: function(food){
    if (food.poisoned){
      this.takeDamage(food.value);
    }else{
      (this.favFood == food.name) ? this.healDamage(Math.floor(food.value*1.5)): this.healDamage(food.value);
    };
  }, 
  attack: function(target){
    target.takeDamage(this.strength);
  }

};

module.exports = Hero;