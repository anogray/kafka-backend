const { Kafka,Partitioners } = require("kafkajs");
async function produce() {
    const kafka = new Kafka({
		clientId:"clientIdDemo",
		brokers:["localhost:9092"]	
    });


    const producer = kafka.producer({createPartitioner: Partitioners.DefaultPartitioner });
    await producer.connect();
    console.log("Producer connected");

    const randomName="MyNameIs_"+parseInt(Math.random()*10000);

    const producerMessage = {
        body:{
            name:randomName
        }
    }

    console.log("sendingProducerMessage",producerMessage)

    const parseStringMessage = JSON.stringify(producerMessage);

    const topicMessages = [
        {
          topic: 'test-service',
          messages: [
                {
                value:`${parseStringMessage}`,
                "numPartittions":1,
                replicationFactor: 1                }
            ],
        },
        {
            topic: 'test-service1',
            messages: [
                  {
                  value:`${parseStringMessage}`,
                  "numPartittions":1,
                  replicationFactor: 1                }
              ],
          },

      ]

      setInterval(async()=>{

        const producedData = await producer.sendBatch({ topicMessages });

        // const producedData = await producer.send({
        //     topic: "email-service",
        //     messages: [
        //         {
        //             value:"{'body':{'from':'infovfirst.com','to':'bhaskar.behl@sundaylabs.io','amount':12,'name':'testname','mailType':'deposit'}}",
        //             partition: 0,
        //         }
        //     ],
        // });
        console.log(`Produced data ${JSON.stringify(producedData)}`);
    },5000)
      
}

produce();
