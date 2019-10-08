import { renderTableRow } from './render-line-item.js';
import waste, { cart } from '../waste-info.js';
import { makeCurrency } from 
const tableElement = document.querySelector('tbody');
let cartTotal = 0;
cart.forEach(wasteOrder => {
    waste.forEach (waste => {
        if(waste.id === wasteOrder.id) {
            const row = renderTableRow(waste, wasteOrder);
            tableElement.appendChild(row);
        }
    });

    const totalCell = document.getElementById('order-total-cell'); 
    totalCell.textContent
     // const row = renderTableRow(waste[i], wasteOrder);
    // const wasteIdFromOrder = wasteOrder.id;
    // for(let i = 0; i > waste.length; i++)
    //     if(waste[i].id === wasteIdFromOrder);

   
});




tableElement.appendChild();