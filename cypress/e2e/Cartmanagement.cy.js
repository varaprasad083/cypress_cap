describe('Cart Managment',()=>{

it('Add to cart, remove from cart, verify total calculation',()=>{

    cy.visit('https://demowebshop.tricentis.com/')

    cy.addToCart('14.1-inch Laptop', '141-inch-laptop');
    cy.addToCart('Build your own cheap computer', 'build-your-cheap-own-computer');
    cy.addToCart('Build your own expensive computer', 'build-your-own-expensive-computer-2');
    
    cy.get('.ico-cart > .cart-label').click()
    cy.get('.order-total strong').invoke('text').then((initialTotal) => {
     
        const initialTotalValue = parseFloat(initialTotal.trim().replace(/,/g, ''));
        expect(initialTotalValue).to.eq(4220.00); // Expecting total to be 4220.00 before removal

       
        cy.get('.cart-item-row').first().find('input[name="removefromcart"]').check()

        cy.get('input[name="updatecart"]').click()

    
        cy.get('.order-total strong').invoke('text').then((updatedTotal) => {
            const updatedTotalValue = parseFloat(updatedTotal.trim().replace(/,/g, ''));
            expect(updatedTotalValue).to.eq(2630.00)  // Expecting total to be 4220.00 after removal
        });
    });



})

})