import waste from "../data/waste-info";
import cart from ;
import makeCurrency from "../common/utils.js"

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content; 
    return tdElement; 
};




export default () => { 
    const tableRow = document.createElement('tr'); 
    const columnOne = makeTd ('waste.name');
    const columnTwo = makeTd('cart.quantity');
    const columnThree = makeTd (prettyPrice);
    const columnFour = makeTd (totalPrice);

    const totalPrice = cart.quantity * waste.price;
    const prettyPrice = makeCurrency(waste.price);
    const prettyTotal = makeCurrency(totalPrice);
    

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);
    return tableRow;
};