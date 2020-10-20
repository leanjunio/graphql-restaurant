import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../.env') });

import { ApolloServer } from 'apollo-server';
import { connect } from 'mongoose';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const DB_URL = process.env.DATABASE_URL ?? 'mopngodb://localhost:27017/restaurant';
connect(DB_URL, { useNewUrlParser: true });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
