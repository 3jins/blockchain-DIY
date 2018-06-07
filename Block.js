'use strict';
import sha256 from 'crypto-js/sha256';

export default class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = 0;
        this.nonce = 0;
    }

    calculateHash() {
        return sha256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).toString();
    }

    mine(difficulty) {
        let zeros = "";
        for (let i = 0; i < difficulty; i++) zeros += "0";

        while(true) {
            const hash = this.calculateHash();
            if (hash.substring(0, difficulty) === zeros) {
                this.hash = hash;
                break;
            }
            this.nonce++;
        }

        console.log("Mining completed!");
        console.log("New block\'s nonce: " + this.nonce);
        console.log("New block\'s hash: " + this.hash);
    }
}