Express-Generator
Express Generator is used to create REST templates.
The app.js is where the application starts.

Mongo DB:
MangoDB stores JSON (documents ) in BSON (Ninary Json) format.
Every document must have an "_id" field that is unique.
Default objectId created by Mongo DB when you insert a document.

ObjectID format:
ObjectID is a 12Byte field
    1. Timestamp(4) .
    2. MachineId(3).
    3. ProcId(2).
    4. Increment(3).
id.getTimestamp() returns the timestamp in ISO date format

Installation



Start MongoDB.

You can start the mongod process by issuing the following command:

sudo systemctl start mongod

If you receive an error similar to the following when starting mongod:
Failed to start mongod.service: Unit mongod.service not found.

Run the following command first:

sudo systemctl daemon-reload

Then run the start command above again.
2
Verify that MongoDB has started successfully.

sudo systemctl status mongod

You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:

sudo systemctl enable mongod

3
Stop MongoDB.

As needed, you can stop the mongod process by issuing the following command:

sudo systemctl stop mongod

4
Restart MongoDB.

You can restart the mongod process by issuing the following command:

sudo systemctl restart mongod

You can follow the state of the process for errors or important messages by watching the output in the /var/log/mongodb/mongod.log file.
5
Begin using MongoDB.

Start a mongo shell on the same host machine as the mongod. You can run the mongo shell without any command-line options to connect to a mongod that is running on your localhost with default port 27017:

mongo

For more information on connecting using the mongo shell, such as to connect to a mongod instance running on a different host and/or port, see The mongo Shell.

To help you start using MongoDB, MongoDB provides Getting Started Guides in various driver editions. See Getting Started for the available editions.

--------------

To start the MongoDB in data folder 
mongod --dbpath=data --bind_ip 127.0.0.10 
The default port 27017

db generator
db.dishes.insert({"name":"hello,"description":"pani-puri"})
db.dishes.find();
db.dishes.find().pretty();
