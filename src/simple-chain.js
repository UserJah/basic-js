const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
//  (position <= 0 && position >= this.chain.reduce((i) => i += 1, 0))

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      value = '';
    }
    this.chain.push(`~( ${value} )~`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) != 'number' || (position <= 0 || position > this.chain.length)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    chainMaker.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain[this.chain.length-1] = this.chain[this.chain.length-1].slice(0,-1);
    this.chain[0] = this.chain[0].slice(1);
    let str = this.chain.join('');
    this.chain = [];
    return str;
  }
};


module.exports = {
  chainMaker
};
