var path    = require('path');
var fs      = require('fs');
var assert  = require('assert');
var babel   = require('babel-core');
var plugin  = require('../');

function trim(str) {
    return str.replace(/^\s+|\s+$/, '');
}

describe('babel-plugin-dev', function() {
    var fixturesDir = path.join(__dirname, 'fixtures');
    var options = { plugins: [plugin] };

    fs.readdirSync(fixturesDir).map(function(caseName) {
        it('works for the ' + caseName + ' case', function() {
            var fixtureDir = path.join(fixturesDir, caseName);

            var actualPath    = path.join(fixtureDir, 'actual.js');
            var expectedPath  = path.join(fixtureDir, 'expected.js');

            var actual    = babel.transformFileSync(actualPath, options).code;
            var expected  = fs.readFileSync(expectedPath, 'utf8');

            assert.equal(trim(actual), trim(expected));
        });
    });
});
