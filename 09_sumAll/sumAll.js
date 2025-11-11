const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a<0 || b<0) return "ERROR";
    
    total = 0
    if (a>b) {
        start = b;
        stop = a;
    } else {
        start = a;
        stop = b;
    }
    for (let i = start; i <= stop; i++) {
        total += i;
    
    }
    
    return total; 

};

// Do not edit below this line
module.exports = sumAll;
