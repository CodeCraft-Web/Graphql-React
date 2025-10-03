import { users } from "./data.js";

export const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },
    getUserById: (parent, args) => {
      const id = args.id;
      return users.find((user) => user.id === id);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const newUser = {
        id: (users.length + 1).toString(),
        name: user.name,
        age: user.age,
        isMarried: user.isMarried,
      };
      users.push(newUser);
      return newUser;
    },
  },
};
