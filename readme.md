
Need to download first kafka and zookeeper  https://kafka.apache.org/downloads

Replace the config folder zookeeper properties file to replace line :
    dataDir=D:\kafka\zookeper-data


Replace the config folder server properties file to replace line :
    log.dirs=D:\kafka\kafka-data
    
Start Zookeeper – Apache Kafka depends on Zookeeper for cluster management. Hence, prior to starting Kafka, Zookeeper has to be started. There is no need to explicitly install Zookeeper, as it comes included with Apache Kafka.
From the root of Apache Kafka, run the following command to start Zookeeper :
Mac : ~$sh bin/zookeeper-server-start.sh config/zookeeper.properties
Windows : .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
Start Apache Kafka Server
From the root of Apache Kafka, Open another Terminal/ CMD and run the following command from the root of Apache Kafka to start Apache Kafka.
Mac : ~$sh bin/kafka-server-start.sh config/server.properties
Windows : .\bin\windows\kafka-server-start.bat .\config\server.properties

Then run topics.js then run app.js and then producers.js

