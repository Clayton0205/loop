const friends = [ 'Joshé', 'Mikhail', 'Cameron', 'Cassidy', 'Xena', 'Reagan' ];
var i = -1

global.setTimeout(() => {
    clearInterval(int);
}, 7000);

const int = setInterval (() => {
    i ++
    console.log(friends[i]);
}, 1000)
