// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderWaste from '../products/render-waste.js';
import renderTableRow from '../shopping-cart/render-line-item.js';
import cart from 
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
test('render table row', assert => {
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
    const expected = '<h3>Your Trash Shopping Cart</h3><table><thead><tr><th>Trash</th><th>Qty</th><th>Price</th><th>Total</th>
 </tr></thead><tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>

        <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tfoot>
     </table>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderWaste(fingernails);
    const html = dom.outerHTML;
    const wasteElementTR = renderTableRow(fingernails, cart);
    const stringHtmlOfWasteElement = wasteElementTR.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(stringHtmlOfWasteElement, expected);
});

