'use strict';
import Block from './Block';

export default class Blockchain {
    constructor(difficulty) {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = difficulty;
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
        newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        let currentIdx = this.chain.length;
        while(currentIdx > 1) {
            let currentBlock = this.chain[--currentIdx];
            let zeros = "";
            for (let i = 0; i < this.difficulty; i++) zeros += "0";

            /* hash test */
            if(currentBlock.hash !== currentBlock.calculateHash()) return false;

            /* hash validity test */
            if(currentBlock.hash.substring(0, this.difficulty) !== zeros) return false;

            /* chain connection test */
            if(currentBlock.previousHash !== this.chain[currentIdx - 1].hash) return false;
        }
        return true;
    }


}
