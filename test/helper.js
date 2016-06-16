
var fs = require('fs');
var path = require('path');

var EXAMPLES_DIR = path.resolve('examples');


function buildEntries() {
    return fs.readdirSync(EXAMPLES_DIR).reduce(function (a, b) {
        if (b === 'build') {
            return a;
        }

        var isDraft = b.charAt(0) === '_';

        if (!isDraft && isDirectory(path.join(EXAMPLES_DIR, b))) {
            a[b] = path.join(EXAMPLES_DIR, b, 'app.js');
        }

        return a;
    }, {});
}


function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

console.log(buildEntries());
