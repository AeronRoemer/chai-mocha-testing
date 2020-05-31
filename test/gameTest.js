const expect = require('chai').expect;

// Test suite for battleship game
describe('Check For Ship', function(){
  const checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinate', function(){
     const player = {
         ships: [{
             locations: [[0,0]]
         }]
     }
     expect(checkForShip(player, [9,9])).to.be.false
 });
   it('should correctly report a ship at a given players coordinate', function(){
    const player = {
        ships: [{
            locations: [[0,0]]
        }]
    
    }
    expect(checkForShip(player, [0,0])).to.be.ok
});
    it('should correctly handle ships at multiple coordinates', function(){
        const player = {
            ships: [{
                locations: [[0,0], [0,1]]
            }]
        }
        expect(checkForShip(player, [0,1])).to.be.ok
        expect(checkForShip(player, [9,9])).to.be.false
    });
    it('should correctly handle multiple ships', function(){
        const player = {
            ships: [{
                locations: [[0,0], [0,1]]
            }, {
                locations: [[5,8], [4,8]]
            }
        ]
        }
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
 it('should target a ship at a given location', function(){
    let player = {
        ships: [{
            locations: [[0, 0]],
            damage:[]
        }
    ]
    }
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