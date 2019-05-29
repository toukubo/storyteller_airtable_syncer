var syncer = {}



//should loop if Storyteller Compose is on
var nounObjects = [
    {
        name: "Noun",
        project: "storyteller",
        attrs:[
            {
                name: "name",
                type: "string"
             },
         ]
    },{
        name: "Attr",
        project: "storyteller",
        attrs:[
            {
                name: "name",
                type: "string"
             },
         ]
    }
];


syncer.nounObjects = nounObjects

module.exports = syncer;