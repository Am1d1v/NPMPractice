


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

const stateDeepCopy = cloneDeep(state);


state.user.loggedIn = false;
console.log(state);
console.log(stateDeepCopy);

Promise.resolve('Testing').then(a => console.log('Finish'));

import 'core-js/stable'
import 'regenerator-runtime/runtime'