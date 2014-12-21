#!/usr/bin/env node

var adventure = require('adventure')
var shop      = adventure('example-adventure')

shop.add('hello_world', function () { return require('./hello_world') })
// shop.add('events', function () { return require('./events') })
// shop.add('streams', function () { return require('./events') })
// shop.add('request', function () { return require('./request') })
// shop.add('response', function () { return require('./response') })
// shop.add('introspection', function () { return require('./introspection') })
// shop.add('module_parents', function () { return require('./module_parents') })

shop.execute(process.argv.slice(2));
