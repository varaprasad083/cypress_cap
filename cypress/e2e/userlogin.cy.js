describe('Login and Logout',()=>{

    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/');
    });

    it('valid Login',()=>{

        //login sucessfull
        cy.get('.ico-login').should("be.visible","Log in")
        cy.get('.ico-login').click()
        
        cy.url().should('include','login')

        cy.login('thee_vara@gmail.com', 'Kansha@123');
        
        

        cy.get('.account').should('contain.text','thee_vara@gmail.com')
        cy.get('.ico-logout').should('contain','Log out')
    })

    it(('invalid credentials'),()=>{
        cy.get('.ico-login').should("be.visible","Log in")
        cy.get('.ico-login').click()
        cy.url().should('include','login')

        cy.get('.email').type('thee_vara@gmail.com')
        cy.get('.password').type('Password123')
        cy.get('.login-button').click()

        cy.get('.validation-summary-errors >span').should('contain.text','Login was unsuccessful. Please correct the errors and try again.')
        cy.get('.validation-summary-errors > ul > li').should('contain.text','The credentials provided are incorrect')
    
    })
})