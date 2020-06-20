var syncer = {}
require('./setup_path.js')
require('dotenv')

AIRTABLE_BASE_HASH=process.env.AIRTABLE_BASE_HASH
AIRTABLE_API_KEY=process.env.AIRTABLE_API_KEY
console.log("AIRTABLE_BASE_HASH : ")
console.dir(AIRTABLE_BASE_HASH)
console.log("AIRTABLE_API_KEY : ")
console.dir(AIRTABLE_API_KEY)


var Airtable = require('airtable');
var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_HASH);
nounObjects = {}

module.exports = syncer;
syncer.exec = function(models,save){
    models.forEach(function(model){
        console.log("model.TABLE_NAME : ")
        console.dir(model.TABLE_NAME)

        base(model.TABLE_NAME).select({maxRecords: 200,view: "api"}).eachPage(function page(records, fetchNextPage) {
            // console.log("records : ")
            // console.dir(records)
            // console.log("base : ")
            // console.dir(base)
            // console.log("err : ")
            // console.dir(err)



            records.forEach(function(record) {
                // console.log("start syncing...... model : " + model.ID)

                var object = {}
                // console.log("record.fields : ")
                // console.dir(record.fields)
                object = record.fields
                object.id = record.id
                // object.name = record.get('name')
                // if(model.ID = NOUNS.ID) noun.project = record.get('project')
                // if(model.ID = attr.ID) noun.project = record.get('project')
                // console.log("object : ")
                // console.dir(object)
                save(object,model)
                console.log('Retrieved '+model.ID, record.get('name'));
            });
            fetchNextPage();
        });
    });
}