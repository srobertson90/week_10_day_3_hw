var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

describe('Hero', function(){

  var hero;
  var namelessHero;
  var ribs;
  var cheese;
  var rat;

  before(function(){
    hero = new Hero("Marcus", "ribs");
    namelessHero = new Hero();
    ribs = new Food("ribs", 20);
    cheese = new Food();
    rat = new Rat();
  });

  it('should have name', function(){
    assert.equal("Marcus", hero.name);
  });

  it('should have a favourite food', function(){
    assert.equal("ribs", hero.favFood);
  });

  it('starts at 100 health', function(){
    assert.equal(100, hero.health);
  });

  it('can speak', function(){
    assert.equal("My name is Marcus.", hero.speak());
  });

  it('can take damage', function(){
    hero.takeDamage(60);
    assert.equal(40, hero.health);
  });

  it('can heal damage', function(){
    hero.healDamage(20);
    assert.equal(60, hero.health);
  });

  it('can eat food', function(){
    hero.eat(cheese);
    assert.equal(65, hero.health);
  });

  it('heals more with favourite food', function(){
    hero.eat(ribs);
    assert.equal(95, hero.health);
  });

  it('takes damage from tainted food', function(){
    rat.taint(cheese);
    hero.eat(cheese);
    assert.equal(90, hero.health);
  });

  it('can attack rat', function(){
    hero.attack(rat);
    assert.equal(15, rat.health);
  });

  it('should have a default name', function(){
    assert.equal("Nameless Hero", namelessHero.name);
  });

  it('should have a default favourite food', function(){
    assert.equal("cheese", namelessHero.favFood);
  });

});