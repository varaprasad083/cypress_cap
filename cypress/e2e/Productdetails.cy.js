describe('Product details and add to cart functionality',()=>{

    beforeEach(()=>{
        cy.visit('https://demowebshop.tricentis.com/')
       
    })

    it('Product details page',()=>{
        cy.get('.product-title > a').contains('14.1-inch Laptop').click()
        cy.url().should("include",'141-inch-laptop')

        cy.get("h1[itemprop='name']").should("contain.text",'14.1-inch Laptop')
        cy.get("span[itemprop='price']").should("contain.text",'1590.00')

    })

    it('functionality of the Add to Cart button',()=>{
        cy.get('.ico-cart .cart-qty').invoke('text').then((initialQty) => {
            const initialCartQty = parseInt(initialQty.replace(/[()]/g, '')) || 0; 

        cy.get('.item-box:nth-child(3) .button-2').click()

        cy.get('.content').should("contain","The product has been added to your ")

        cy.get('.ico-cart .cart-qty').should(($newQty) => {
            const newCartQty = parseInt($newQty.text().replace(/[()]/g, ''));
            expect(newCartQty).to.eq(initialCartQty + 1); 

        });
    });



    cy.get('.ico-cart > .cart-label').click()
    cy.url().should('include','cart')
    cy.get("div[class='page-title'] h1").contains('Shopping cart')
    })
})