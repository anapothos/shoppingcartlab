// import waste from '../data/waste-info.js';
// import cart from '../data/waste-info.js';
import makeCurrency from '../common/utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content; 
    return tdElement; 
};

export default (waste, cart) => { 
    const tableRow = document.createElement('tr'); 
  

    const totalPrice = cart.quantity * waste.price;
    const prettyPrice = makeCurrency(waste.price);
    const prettyTotal = makeCurrency(totalPrice);
    
    const columnOne = makeTd (waste.name);
    const columnTwo = makeTd(cart.quantity);
    const columnThree = makeTd (prettyPrice);
    const columnFour = makeTd (prettyTotal);
    
    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);
    return tableRow;
};