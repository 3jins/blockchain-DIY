'use strict';
import Block from './Block';

export default class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, new Date(), "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        const latestBlock = this.getLatestBlock();
        newBlock.previousHash = latestBlock.hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        let currentIdx = this.chain.length;
        while(currentIdx > 1) {
            let currentBlock = this.chain[--currentIdx];
            if(currentBlock.hash !== currentBlock.calculateHash()) return false;
            if(currentBlock.previousHash !== this.chain[currentIdx - 1].hash) return false;
        }
        return true;
    }
}

