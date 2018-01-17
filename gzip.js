const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('./dist/bundle.js');
const out = fs.createWriteStream('./dist/bundle.js.gz');

inp.pipe(gzip).pipe(out);