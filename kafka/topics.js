const { Kafka } = require("kafkajs");
const dotenv = require("dotenv");

dotenv.config();
async function createTopic(){
const kafka = new Kafka({ 
		clientId:"clientIdDemo",
		brokers:["localhost:9092"]		
		});



const admin = kafka.admin();		
await admin.connect();
await admin.createTopics({
topics:[
{
"topic":"test-service",
"numPartittions":1,
replicationFactor: 1
},
{
	"topic":"test-service2",
	"numPartittions":1,
	replicationFactor: 1
	}
]
});

admin.listTopics().then(
  function(value) { console.log('valuevaluevalue',value) },
  function(error) { console.log('errorlistTopics',error) }
);

console.log("topic created");

}

createTopic();
