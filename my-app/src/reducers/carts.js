import * as types from './../contants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    { 
        product :{
        id: 1,
        name: 'JBL',
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/86/a7/ec/f1fb81750aabd12836b50a76549f8e85.jpg",
        price: 500,
        inventory: 100,
        rating: 5
        },
        quantity:5
    }
];

const carts = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
    }
}
export default carts;