describe('Visual testing functionality',()=>{

    beforeEach(()=>{
        cy.visit('https://demowebshop.tricentis.com/')
       
    })

    it('Product details page',()=>{
        cy.get('.product-title > a').contains('14.1-inch Laptop').click()
        cy.url().should("include",'141-inch-laptop')
        cy.compareSnapshot('test-image', 0.2);
    })
})