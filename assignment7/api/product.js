const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function list() {
  const db = getDb();
  const products = await db.collection('products').find({}).toArray();
  return products;
}

async function add(_, { product }) {
  const db = getDb();

  const newProduct = Object.assign({}, product);
  newProduct.id = await getNextSequence('products');

  const result = await db.collection('products').insertOne(newProduct);
  const savedProduct = await db.collection('products')
    .findOne({ _id: result.insertedId });
  return savedProduct;
}

async function get(_, { id }) {
  const db = getDb();
  const issue = await db.collection('products').findOne({ id });
  return issue;
}

async function update(_, { id, changes }) {
  const db = getDb();
  if (changes.productName || changes.imageUrl || changes.pricePerUnit || changes.category) {
    const product = await db.collection('products').findOne({ id });
    Object.assign(product, changes);
  }
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedProduct = await db.collection('products').findOne({ id });
  return savedProduct;
}

async function total() {
  const db = getDb();

  const results = await db.collection('products').find().count();

  return results;
}

async function remove(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  if (!product) return false;

  result = await db.collection('products').removeOne({ id });
  return true;
}

//db.products.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }])
async function count() {
  const db = getDb();

  const results = await db.collection('products').aggregate([
    {
      $group: {
        _id: null,
        numOfProducts: { $sum: 1 },
      },
    },
  ]);


  return results;
}

module.exports = {
  list,
  add,
  get,
  update,
  remove,
  total,
};