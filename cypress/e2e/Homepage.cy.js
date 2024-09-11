describe('Homepage',()=>{

    beforeEach(()=>{
        cy.visit('https://demowebshop.tricentis.com/')
       
    })

    it('check the Homepage',()=>{
        cy.url().should('include','demowebshop')
        cy.get('.header-logo img')
        .should('be.visible')
        .and('have.attr', 'alt', 'Tricentis Demo Web Shop');

        cy.get('.topic-html-content-header').should('contain.text','Welcome to our store')
     

    })

    it('should display all product categories', () => {
        // Select the list of categories
        cy.get('.block-category-navigation .listbox ul.list')
            .should('be.visible')
            .find('li')
            .should('have.length', 7); 

            const expectedCategories = [
                'Books',
                'Computers',
                'Electronics',
                'Apparel & Shoes',
                'Digital downloads',
                'Jewelry',
                'Gift Cards'
            ];

             cy.get('.block-category-navigation .listbox ul.list li')
            .each(($el, index) => {
                // const categoryText = $el.text().trim();
                /// cy.log(`${expectedCategories[index]} = ${categoryText}`)
                cy.wrap($el).should('contain.text', expectedCategories[index]);
            });
    
    })

 


})