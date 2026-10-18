function add(a, b) { return a + b; }
function health() { return { status: 'ok' }; }
module.exports = { add, health };
module.exports.version = () => '0.2.0';
