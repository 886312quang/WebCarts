var initialState = [
    {
        id:1,
        name: 'JBL',
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/86/a7/ec/f1fb81750aabd12836b50a76549f8e85.jpg",
        price: 500,
        inventory: 100,
        rating: 5
    },
    {
        id:2,
        name: 'Jbl2',
        img:"https://salt.tikicdn.com/cache/w1200/ts/product/fb/08/b0/bb81006e1de5b73a7794e47da2e79466.jpg",
        price: 500,
        inventory: 100,
        rating: 5
    }
    ,
    {
        id:3,
        name: 'JBL3',
        img: "https://salt.tikicdn.com/cache/w1200/ts/product/41/08/aa/22701a48571e24b13154786e8407f6f4.jpg",
        price: 500,
        inventory: 100,
        rating:4
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}
export default products;