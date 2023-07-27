import _ from "lodash";

const Users = [
  {
    id: 1,
    name: "prabh",
    age: 22,
    country: "india",
  },
  {
    id: 2,
    name: "albert",
    age: 55,
    country: "america",
  },
  {
    id: 3,
    name: "bratt",
    age: 34,
    country: "japan",
  },
  {
    id: 4,
    name: "luffy",
    age: 66,
    country: "germany",
  },
];

const country = [
  {
    id: 1,
    name: "india",
    code: "IN",
  },
  {
    id: 2,
    name: "america",
    code: "US",
  },
  {
    id: 3,
    name: "japan",
    code: "JAP",
  },
  {
    id: 4,
    name: "germany",
    code: "DE",
  },
];

const movies = [
  {
    id: 1,
    name: "breaking bad",
  },
  {
    id: 2,
    name: "one piece",
  },
  {
    id: 3,
    name: "thor",
  },
  {
    id: 4,
    name: "game of thrones",
  },
];

const resolvers = {
  Query: {
    users: () => Users,
    user: (parent, arg) => {
      const name = arg.name;
      const user = _.find(Users, { name });
      return user;
    },
    movies: () => movies,
    country: (parent, arg) => {
      const code = arg.code;
      const coun = _.find(country, { code });
      return coun;
    },
  },

  Mutation: {
    createUser: (parent, arg) => {
      const user = arg.inputs;
      const userId = Users[Users.length - 1].id;
      user.id = userId + 1;
      Users.push(user);
      return user;
    },

    updateUser: (parent, arg) => {
      const { id, name, age, country } = arg.inputs;
      Users.forEach((item) => {
        if (item.id === Number(id)) {
          item.name = name;
          item.age = age;
          item.country = country;
        }
      });
      return arg.inputs;
    },

    deleteUser: (parent, arg) => {
      _.remove(Users, (user) => user.id === Number(arg.id));
      return null;
    },
  },

  Users: {
    favoriteMovie: () => {
      return movies;
    },
  },
};

export default resolvers;
