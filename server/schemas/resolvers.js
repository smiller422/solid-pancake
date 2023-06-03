const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
    Query: {
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
          },
      
          users: async () => {
            return User.find();
          },
    },

    Mutation: {
        addUser: async (parent, args) => {
            // Check if user already exists
            const userAlreadyExists = await User.findOne({ email: args.email });
            if (userAlreadyExists) {
              throw new AuthenticationError('User with that email already exists');
            }
            const user = await User.create({ ...args });
            const token = signToken(user);
            return { token, user };
          },
      
          removeUser: async (parent, { userId }, context) => {
            if (context?.user?.isAdmin) {
              return User.findOneAndDelete({ _id: userId });
            }
            throw new AuthenticationError('You need to be an admin!');
          },
          
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
    }

};

module.exports = resolvers;