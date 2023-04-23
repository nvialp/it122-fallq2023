import mongoose from 'mongoose';
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git
import { connectionString } from "../credentials.js"

mongoose.connect(connectionString, {
    dbName: 'class-projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const roverSchema = new Schema({
 name: { type: String, required: true },
 landed: String,
 speed: String,
 mass: String,
 tools: Number
});

export const Rovers = mongoose.model('Rovers', roverSchema);