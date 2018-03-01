import { Mongo } from 'meteor/mongo';

// creating a new Mongo Database collection called items 
const Items = new Mongo.Collection('items');

export default Items;
