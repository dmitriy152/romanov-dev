import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://romanov-dev33:*****@romanov-dev.rm5xs4c.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db = null;

export async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }

  db = client.db('my-db-name');
}

export function getDatabase() {
  return db;
}