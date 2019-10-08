
export const makeCurrency = (number) => number.toLocaleString ('en-US', { 
    style: 'currency', 
    currency: 'USD',
});

const totalWastePrice = (waste, quantity) => waste.price * quantity;

export const totalCartPrice = (waste, cart) => {

};

