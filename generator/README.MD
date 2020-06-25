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
