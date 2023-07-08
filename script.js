


import  cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
    cart: [
        {product: "Banana", quantity: 10},
        {product: "Apple", quantity: 5}
    ],
    user: {
        loggedIn: true
    }
}

const stateCopy = Object.assign({}, state);
console.log(stateCopy);