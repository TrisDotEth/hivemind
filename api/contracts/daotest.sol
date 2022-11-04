// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


/**
Proof of concept that a contract can set the rules for a hivemind. This is centralised and a hack - don't use for anything but testing.
*/

import "hardhat/console.sol";

contract DesignHivemindRules {
    struct Rule {
        string text;
        bool active;
    }

    address private owner;
    // An array of 'Rule' structs
    Rule[] public rules;

    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);

        // modifier to check if caller is owner
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

        /**
     * @dev Set contract deployer as owner
     */
    constructor() {
        console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
    }

    /**
     * @dev Change owner
     * @param newOwner address of new owner
     */
    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    /**
     * @dev Return owner address
     * @return address of owner
     */
    function getModerator() external view returns (address) {
        return owner;
    }

    function createRule(string calldata _text) public isOwner {
        rules.push(Rule({text: _text, active: true}));
    }

    // update rule text
    function updateRuleText(uint _index, string calldata _text) public isOwner {
        Rule storage rule = rules[_index];
        rule.text = _text;
    }

    // update active
    function toggleActive(uint _index) public isOwner {
        Rule storage rule = rules[_index];
        rule.active = !rule.active;
    }
    // number of rules
    function numberOfRules() external view returns (uint) {
        return rules.length;
    }
}
