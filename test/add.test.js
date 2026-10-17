const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../index.js');
test('adds', () => assert.strictEqual(add(1, 2), 3));
