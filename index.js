// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(`Ralph`);
};

function destructivelyPrependCat(name){
    cats.unshift(`Bob`);
};

function destructivelyRemoveLastCat(name){
    cats.pop();
};

function destructivelyRemoveFirstCat(name){
    cats.shift();
};

const catsCopy = [...cats];

function appendCat(name){
    return [...catsCopy, `Broom`];
};

function prependCat(name){
    return [`Arnold`, ...catsCopy];
};

//const catsAppend = [...cats, `Broom`];

//function appendCat(name){
   // return catsAppend;
//}

//const catsPrepend = [`Arnold`, ...cats];

//function prependCat(name){
   // return catsPrepend;
//}

function removeLastCat(){
    return catsCopy.slice(0, -1);
};

function removeFirstCat(){
    return catsCopy.slice(1);
};