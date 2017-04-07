'use strict';

const test = require('tape');
const diff = require('sinon-called-with-diff');
const sinon = diff(require('sinon'));

const wraptile = require('..');

test('wraptile: no arguments', t => {
    t.throws(wraptile, /fn should be function!/, 'should throw when no fn');
    t.end();
});

test('wraptile: arguments: wrong type', t => {
    const fn  = () => wraptile(1);
   
    t.throws(fn, /fn should be function/, 'shoud throw when wrong type');
    t.end();
});

test('wraptile: fn: args: first', t => {
    const fn = sinon.stub();
    const f = wraptile(fn, 'hello');
    const f1 = f();
    
    f1();
   
    t.ok(fn.calledWith('hello'), 'should set first args');
    t.end();
});

test('wraptile: fn: args: second', t => {
    const fn = sinon.stub();
    const f = wraptile(fn);
    const f1 = f('hello');
    
    f1();
   
    t.ok(fn.calledWith('hello'), 'should set second args');
    t.end();
});

test('wraptile: fn: args: third', t => {
    const fn = sinon.stub();
    const f = wraptile(fn);
    const f1 = f();
    
    f1('hello');
   
    t.ok(fn.calledWith('hello'), 'should set third args');
    t.end();
});

test('wraptile: fn: args: first + second', t => {
    const fn = sinon.stub();
    const f = wraptile(fn, 'hello');
    const f1 = f('world');
    
    f1();
   
    t.ok(fn.calledWith('hello', 'world'), 'should set first + second args');
    t.end();
});

test('wraptile: fn: args: first + second + third', t => {
    const fn = sinon.stub();
    const f = wraptile(fn, 'hello');
    const f1 = f('world');
    
    f1('some');
   
    t.ok(fn.calledWith('hello', 'world', 'some'), 'should set first + second + third args');
    t.end();
});

