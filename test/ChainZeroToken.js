const { equal } = require("assert")
const { isMainThread } = require("worker_threads")

var ChainZeroToken = artifacts.require("ChainZeroToken.sol")

contract("ChainZeroToken", function(accounts) {
    it("sets the total supply upon deployment", function() {
        return ChainZeroToken.deployed().then(function(instance) {
            tokenInstance = instance
            return tokenInstance.totalSupply()
        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 1000000, "sets the total supply to 1,000,000")
        })
    })
})