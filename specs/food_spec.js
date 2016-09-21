var assert = require('assert');
var Food = require('../food');

describe('Food', function(){

  var ribs;
  var cheese;

  before(function(){
    ribs = new Food("ribs", 20);
    cheese = new Food();
  });

  it('should have a name', function(){
    assert.equal("ribs", ribs.name);
  });

  it('should have a value', function(){
    assert.equal(20, ribs.value);
  });

  it('should not be poisoned at start', function(){
    assert.equal(false, ribs.poisoned);
  });

  it('can be poisoned', function(){
    ribs.poison();
    assert.equal(true, ribs.poisoned);
  });

  it('has a default name', function(){
    assert.equal("cheese", cheese.name);
  });

  it('has a default value', function(){
    assert.equal(5, cheese.value);
  });

});