const fingernails = {
    id: 'fingernails',
    name: 'Finger Nails',
    image: 'fingernails.jpg',
    description: 'Carefully removed for your satisfaction.',
    category: 'remains',
    price: 99.99,
    cost: 0.00,
};
const starbucksCup = {
    id: 'starbuckscup',
    name: 'Empty Starbucks Cup',
    image: 'starbucks.jpg',
    description: 'Procured from the streets and inspected to ensure optimal filth.',
    category: 'remains',
    price: 79.99,
    cost: 0.00,
};
const lostShoe = {
    id: 'lostshoe',
    name: 'Abandoned Shoe',
    image: 'shoe.jpg',
    description: 'Discovered on the South Bank, lost and alone.',
    category: 'remains',
    price: 199.99,
    cost: 0.00,
};
const waste = [
    lostShoe,
    starbucksCup,
    fingernails,
];
export const cart = [{
    id: 'fingernails',
    quantity: 2
}, {
    id: 'starbuckscup',
    quantity: 5
}, {
    id: 'lostshoe',
    quantity: 1
}];
export default waste; 