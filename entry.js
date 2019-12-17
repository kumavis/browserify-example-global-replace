// shim for node
global.window = global

const { Client, environments } = require('plaid')

c = new Client(1, 2, 3, environments.development)