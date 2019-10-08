// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderWaste from '../products/render-waste.js';
const test = QUnit.test;

QUnit.module('Render Waste');

test('test render waste', assert => {
    //Arrange
    // Set up your parameters and expectations
    const fingernails = {
        id: 'fingernails',
        name: 'Finger Nails',
        image: 'fingernails.jpg',
        description: 'Carefully removed for your satisfaction.',
        category: 'remains',
        price: 99.99,
        cost: 0.00,
    };
    const expected = '<li class="remains" title="Carefully removed for your satisfaction."><h3>Finger Nails</h3><img src="../assets/fingernails.jpg" alt="Finger Nailsimage"><p class="price">$99.99<button value="fingernails">Add</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderWaste(fingernails);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});