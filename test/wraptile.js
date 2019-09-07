'use strict';

const test = require('supertape');
const stub = require('@cloudcmd/stub');

const wraptile = require('..');

test('wraptile: no arguments', (t) => {
    t.throws(wraptile, /fn should be a function!/, 'should throw when no fn');
    t.end();
});

test('wraptile: arguments: wrong type', (t) => {
    const fn = () => wraptile(1);
    
    t.throws(fn, /fn should be a function/, 'shoud throw when wrong type');
    t.end();
});

test('wraptile: fn: args: first', (t) => {
    const fn = stub();
    const f = wraptile(fn, 'hello');
    
    f();
    
    t.ok(fn.calledWith('hello'), 'should set first args');
    t.end();
});

test('wraptile: fn: args: second', (t) => {
    const fn = stub();
    const f = wraptile(fn);
    const f1 = f('hello');
    
    f1();
    
    t.ok(fn.calledWith('hello'), 'should set second args');
    t.end();
});

test('wraptile: fn: args: third', (t) => {
    const fn = stub();
    const f = wraptile(fn);
    const f1 = f();
    
    f1('hello');
    
    t.ok(fn.calledWith('hello'), 'should set third args');
    t.end();
});

test('wraptile: fn: args: first + second', (t) => {
    const fn = stub();
    const f = wraptile(fn, 'hello');
    
    f('world');
    
    t.ok(fn.calledWith('hello', 'world'), 'should set first + second args');
    t.end();
});

