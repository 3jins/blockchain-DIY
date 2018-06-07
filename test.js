'use strict';
import Blockchain from './Blockchain';
import Block from './Block';

let testChain = new Blockchain(4);

testChain.createGenesisBlock();
testChain.addBlock(new Block(1, new Date(), { content: "test" }));
console.log(testChain.isChainValid());
setTimeout(() => {
        testChain.addBlock(new Block(2, new Date(), {content: "test2"}));
        console.log(testChain.isChainValid());
        // testChain.getLatestBlock().hash = "Love is the most beautiful when it cannot come true";
        // console.log(testChain.isChainValid());
        console.log(JSON.stringify(testChain, null, 2));
    },
    1000
);