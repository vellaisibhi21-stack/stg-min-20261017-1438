const test = require('node:test');
const assert = require('node:assert');
const { version } = require('../index');
test('feat_9 version is 0.2.0', () => { assert.strictEqual(version(), '0.2.0'); });
