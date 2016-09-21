var Food = function(inputName, inputValue){
  this.name = inputName ? inputName : "cheese";
  this.value = inputValue ? inputValue : 5;
  this.poisoned = false;
};

Food.prototype = {
  poison: function(){
    this.poisoned = true;
  }
};

module.exports = Food;