var sum = function sum(arg) {
    return arguments.length > 0
        ? sum.bind(this + arg)
        : Number(this);      
}.bind(0);