import { IDish, Dish } from './models/Dish';
import { Restaurant } from './models/Restaurant';

export const resolvers = {
  IEmployee: {
    __resolveType(obj, context, info) {
      if (obj.dish) {
        return 'Cook';
      }

      if (obj.table) {
        return 'Server';
      }

      if (obj.employee) {
        return 'Manager';
      }

      return 'Employee';
    },
  },

  Query: {
    dishes: () => Dish.find(),
    restaurant: () => Restaurant.findOne(),
  },

  Mutation: {
    createDish: async (_: any, { name }: IDish) => {
      const dish = new Dish({ name });
      await dish.save();

      return dish;
    },
  },
};
