'use strict';
import Blockchain from './Blockchain';
import Block from './Block';

let testChain = new Blockchain();

testChain.createGenesisBlock();
testChain.addBlock(new Block(1, new Date(), { content: "test" }));
setTimeout(() => {
        testChain.addBlock(new Block(2, new Date(), {content: "test2"}));
        console.log(JSON.stringify(testChain, null, 2));
    },
    1000
);