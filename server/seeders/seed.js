const db = require('../config/connection');
const userSeeds = require('./userSeeds.json');
const User = require('../models/User');

const seedDatabase = async () => {
    try {
      await User.collection.deleteMany({});
      await User.collection.insertMany(userSeeds);
      const users = await User.find({}); // Fetch users from DB
      console.log('Users seeded!');
    } catch (err) {
        console.error(err);
        process.exit(1);
        }
    process.exit(0);
};

seedDatabase();