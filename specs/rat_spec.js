var assert = require('assert');
var Rat = require('../rat');
var Food = require('../food');
var Hero = require('../hero');

describe('Rat', function(){

  var rat;
  var bacon;
  var hero;

  before(function(){
    bacon = new Food("bacon", 10);
    rat = new Rat();
    hero = new Hero();
  });

  it('can poison food', function(){
    rat.taint(bacon);
    assert.equal(true, bacon.poisoned);
  });

  it('can take damage', function(){
    rat.takeDamage(30);
    assert.equal(10, rat.health);
  });

  it('can attack hero', function(){
    rat.attack(hero);
    assert.equal(85, hero.health);
  });

});