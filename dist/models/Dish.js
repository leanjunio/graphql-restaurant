"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
const mongoose_1 = require("mongoose");
const DishSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Order',
    },
});
exports.Dish = mongoose_1.model('Dish', DishSchema);
//# sourceMappingURL=Dish.js.map