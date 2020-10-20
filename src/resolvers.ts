import { IDish, Dish } from './models/Dish';

export const resolvers = {
  Query: {
    dishes: () => {
      return Dish.find();
    },
  },

  Mutation: {
    createDish: async (_: any, { name }: IDish) => {
      const dish = new Dish({ name });
      await dish.save();

      return dish;
    },
  },
};
