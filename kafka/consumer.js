const { Kafka } = require("kafkajs");


const notificationTopics = ["test-service","test-service1"];

const consume = async () => {

  try{

    const kafka = new Kafka({
      clientId:"clientIdDemo",
      brokers:["localhost:9092"]	
    });
  
    const consumer = kafka.consumer({ groupId: process.env.KAFKA_GROUP_ID});
    await consumer.connect();
    console.log("Consumer connected");
  
    // await consumer.subscribe({
    //   topic: "email-service",
    //   fromBeginning: true,
    // });
    await consumer.subscribe({
      topics: notificationTopics,
      fromBeginning: true,
      "numPartittions":1,
replicationFactor: 1
    });
   
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {

          const kafkaMessage = JSON.parse(message.value.toString());
          console.log("consumerTopic",{ topic},message.value.toString(),{kafkaMessage})

        
      },
    });
  }catch(err){
    console.log("errorConsumer",err)
  }
  
};
module.exports = consume
// consume().catch(async error => {
//   console.error(error)
//   try {
//     await consumer.disconnect()
//   } catch (e) {
//     console.error('Failed to gracefully disconnect consumer', e)
//   }
//   process.exit(1)
// })
