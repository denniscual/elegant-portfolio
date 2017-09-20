const express = require('express');
const morgan = require('morgan');
const path = require('path');
const R = require('ramda');

// creating our app instance.
const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// we use pipe function from ramda to become readable the function composition.
// the reading is from left-to-right function composition, the first fn may have any arity, the remaining must be unary.
app.use(R.pipe(path.resolve, express.static)(__dirname, '..', 'build'));

// when navigating to all urls of this domain, served the index.html
// dirname - the directory named of the current module. 
app.get('*', (req, res) => {
    // sending the file index.html that is resided on the build dir.
    R.pipe(path.resolve, res.sendFile)(__dirname, '..', '', 'index.html');
});


// export this app object.
module.exports = app;





