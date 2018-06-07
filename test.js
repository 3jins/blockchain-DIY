'use strict';
import Blockchain from './Blockchain';
import Block from './Block';

const checkTimeSpent = (callback, role) => {
    let start = new Date();
    callback();
    console.log(((new Date() - start) / 1000) + "seconds has spent to " + role + ".");
};

let testChain = new Blockchain(4);

testChain.createGenesisBlock();
checkTimeSpent(
    () => testChain.addBlock(new Block(1, new Date(), { content: "test" })),
    "add a new block"
);
console.log(testChain.isChainValid());
setTimeout(() => {
        checkTimeSpent(
            () => testChain.addBlock(new Block(2, new Date(), {content: "test2"})),
            "add a new block"
        );
        console.log(testChain.isChainValid());
        // testChain.getLatestBlock().hash = "Love is the most beautiful when it cannot come true";
        // console.log(testChain.isChainValid());
        console.log(JSON.stringify(testChain, null, 2));
    },
    1000
);