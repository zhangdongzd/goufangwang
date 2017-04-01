var list = require('./list.json')
var ershoufanglist = require('./ershoufanglist.json')
var zufanglist = require('./zufanglist.json')
module.exports = function() {
  return {
    'list.php': list,
    'ershoufanglist.php': ershoufanglist,
    'zufanglist.php': zufanglist
  }
}
