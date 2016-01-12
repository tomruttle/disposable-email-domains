var listPath = require('path').join(__dirname, 'disposable_email_blacklist.conf');
var blacklist = require('fs').readFileSync(listPath, 'utf8');
module.exports = blacklist.split('\n').filter(Boolean);