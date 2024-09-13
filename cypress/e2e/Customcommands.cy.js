describe('Custom commands',()=>{

    it("Login and Add to Cart Functionality ",()=>{

        cy.login('thee_vara@gmail.com', 'Kansha@123');
        cy.addToCart('14.1-inch Laptop', '141-inch-laptop');
    })
})