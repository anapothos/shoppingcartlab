import waste from '../data/waste-info.js';
import renderWaste from './render-waste.js';

const list = document.getElementById('waste');

for(let i = 0; i < waste.length; i++) {
    const wasteString = waste[i];
    const dom = renderWaste(wasteString);
    list.appendChild(dom);
}