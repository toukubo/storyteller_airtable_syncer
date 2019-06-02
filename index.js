var syncer = {}
require('./setup_path.js')
require('dotenv')

AIRTABLE_BASE_HASH=process.env.AIRTABLE_BASE_HASH
AIRTABLE_API_KEY=process.env.AIRTABLE_API_KEY


var Airtable = require('airtable');
var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_HASH);
nounObjects = {}

module.exports = syncer;
syncer.exec = function(models,save){
    models.forEach(function(model){
        base(model.TABLE_NAME).select({view: "Grid view"}).firstPage(function(err, records) {
            records.forEach(function(record) {
                console.log("start syncing...... model : " + model.ID)

                var object = {}
                console.log("record.fields : ")
                console.dir(record.fields)
                object = record.fields
                // object.name = record.get('name')
                // if(model.ID = NOUNS.ID) noun.project = record.get('project')
                // if(model.ID = attr.ID) noun.project = record.get('project')
                console.log("object : ")
                console.dir(object)
                save(object,model)
                console.log('Retrieved', record.get('Name'));
            });
        });
    });
}