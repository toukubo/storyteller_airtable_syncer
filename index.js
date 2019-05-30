var syncer = {}






require('dotenv')

AIRTABLE_BASE_HASH=process.env.AIRTABLE_BASE_HASH
AIRTABLE_API_KEY=process.env.AIRTABLE_API_KEY


var Airtable = require('airtable');
var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_HASH);
nounObjects = {}


new Promise((resolve,reject) => {
    base('Nouns').select({
        view: "Grid view"
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        nounObjects = records
        console.log("nounObjects in scope : " + nounObjects)
    
        records.forEach(function(record) {
        // logic for record
         Noun = record
          console.log('Retrieved', Noun.get('Name'));
        });
    });
    
})

console.log("nounObjects out of hte scope : " + nounObjects)
syncer.nounObjects = nounObjects

module.exports = syncer;