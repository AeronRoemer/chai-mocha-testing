const expect = require('chai').expect;

// Test suite for battleship game
describe('Check For Ship', function(){
  const checkForShip = require('../game_logic/ship_methods').checkForShip;
  let player;
  before(function(){ //sets up specs that will be used in the tests 
    player = {
        ships: [{
            locations: [[0,0], [0,1]]
        }, {
            locations: [[5,8], [4,8]]
        }
    ]
    }
  })
  it('should correctly report no ship at a given players coordinate', function(){
     expect(checkForShip(player, [9,9])).to.be.false
 });
   it('should correctly report a ship at a given players coordinate', function(){

    expect(checkForShip(player, [0,0])).to.be.ok
});
    it('should correctly handle ships at multiple coordinates', function(){

        expect(checkForShip(player, [0,1])).to.be.ok
        expect(checkForShip(player, [9,9])).to.be.false
    });
    it('should correctly handle multiple ships', function(){
        expect(checkForShip(player, [0,1])).to.be.ok
        expect(checkForShip(player, [5,8])).to.be.ok
    });
})




describe('Damage Ship', function(){
    const damageShip = require('../game_logic/ship_methods').damageShip;
 it('should register damage on a given ship on a given location', function(){
   let ship = {
       locations:[[0,0], [0,1]],
        damage:[]    }
    damageShip(ship, [0,0])
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0])
 });
 
})

describe('Fire', function(){
    const fire = require('../game_logic/ship_methods').fire;
    let player;
    beforeEach(function(){ //resets on each test
        player = {
            ships: [{
                locations: [[0, 0]],
                damage:[]
            }
        ]
        }
    })

    after(function(){
        console.log('Entire test suite completed')
    })
    afterEach(function (){
        console.log('One test suite completed')
    })
 it('should target a ship at a given location', function(){
    fire(player, [0,0])
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0])
 });

 it('should NOT target a ship if the player misses', function(){
    let player = {
        ships: [{
            locations: [[0, 0]],
            damage:[]
        }
    ]
    }
    fire(player, [9,9])
    expect(player.ships[0].damage[0]).not.to.deep.equal([0, 0])
 });
 
})

//function with stub
describe('take Turn', function(){
    const takeTurn = require('../game_logic/ship_methods').takeTurn;
    let guess, player;

    beforeEach(function(){
        // 'guess' stub allows test to pass
        guess = function (){ return [0,0]};
        player = {
            ships:[
                {
                    locations:[[0,0]],
                    damage: [],
                }
            ]
        }
    })
    it('should return false if the game ends', function (){
        const actual = takeTurn(player, guess);
        expect(actual).to.be.false;
    })
})

//async test
function saveGameAsync(callback){
    setTimeout(function(){
        callback();
    }, 1000)
}

describe('save game', function(){
    it('should update save status', function(done){//signals async
        let status = 'game not saved...'
        saveGameAsync(function(){ //place expectation inside async function's callback, followed by done()
            status = 'game saved';
            expect(status).to.equal('game saved')
            done();
        })
    })
})