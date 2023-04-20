import mongoose from 'mongoose';
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git
const connectionString = "mongodb+srv://Admin:5XMkg6aJyP0AJNr9@cluster0.doumi3o.mongodb.net/?retryWrites=true&w=majority";

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
 tools: int
});

export const Rover = mongoose.model('Rover', roverSchema);