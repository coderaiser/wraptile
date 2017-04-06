'use strict';

const wrap = (fn, ...a) => (...b) => (...c) => fn(...a, ...b, ...c);

module.exports = (fn, ...a) => {
    check(fn);
    
    return wrap(fn, ...a);
}

function check(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be function!');
}

