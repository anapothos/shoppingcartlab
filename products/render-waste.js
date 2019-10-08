function renderWaste(waste){
    const li = document.createElement ('li');
    li.className = waste.category;
    li.title = waste.description; 

    const h3 = document.createElement ('h3'); 
    h3.textContent = waste.name; 
    li.appendChild(h3);

    const img = document.createElement ('img');
    img.src = '../assets/' + waste.image;
    img.alt = waste.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    // p.textContent = waste.price;


    const usd = '$' + waste.price.toFixed(2);
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);


    const button = document.createElement ('button');
    button.textContent = 'Add';
    button.value = waste.id;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
export default renderWaste;