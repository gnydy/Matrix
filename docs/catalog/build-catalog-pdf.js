#!/usr/bin/env node
/** @deprecated Use: node ../build-all-pdfs.js catalog/PROJECT-CATALOG.md */
const { main } = require('../build-all-pdfs.js');
process.argv = [process.argv[0], process.argv[1], require('path').join(__dirname, 'PROJECT-CATALOG.md')];
main();
