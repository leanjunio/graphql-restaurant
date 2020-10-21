"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Dish_1 = require("./models/Dish");
const Restaurant_1 = require("./models/Restaurant");
exports.resolvers = {
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
        dishes: () => Dish_1.Dish.find(),
        restaurant: () => Restaurant_1.Restaurant.findOne(),
    },
    Mutation: {
        createDish: async (_, { name }) => {
            const dish = new Dish_1.Dish({ name });
            await dish.save();
            return dish;
        },
    },
};
//# sourceMappingURL=resolvers.js.map