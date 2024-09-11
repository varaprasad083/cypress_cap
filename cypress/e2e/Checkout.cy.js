describe('Checkout Process', () => {

    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/');
    });

    it('should complete the checkout process dynamically based on user login status', () => {


         //login
        cy.login('thee_vara@gmail.com', 'Kansha@123');

        //add items to cart
        cy.addToCart('14.1-inch Laptop', '141-inch-laptop');
        cy.addToCart('Build your own cheap computer', 'build-your-cheap-own-computer');

        cy.get('.ico-cart > .cart-label').click();
        cy.get('#termsofservice').check();
        cy.get('#checkout').click();

        // Fill shipping details
        cy.get('#billing-address-select').select('New Address');
        cy.get('#BillingNewAddress_FirstName').type('John');
        cy.get('#BillingNewAddress_LastName').type('Doe');
        cy.get('#BillingNewAddress_Address1').type('123 Test St');
        cy.get('#BillingNewAddress_City').type('Test City');
        cy.get('#BillingNewAddress_ZipPostalCode').type('12345');
        cy.get('#BillingNewAddress_CountryId').select('United States');
        cy.get('#BillingNewAddress_PhoneNumber').type('12345678');
        cy.get("input[onclick='Billing.save()']").click();

        // Continue through the checkout steps
        cy.get('#shipping-buttons-container > .button-1').click();
        cy.get("input[class='button-1 shipping-method-next-step-button']").click();
        cy.get("#paymentmethod_0").should('be.checked');
        cy.get("input[class='button-1 payment-method-next-step-button']").click();

        // Confirm the order
        cy.get('#payment-info-buttons-container > .button-1').click();
        cy.get('#confirm-order-buttons-container > .button-1').click();

        // Verify the order is completed
        cy.url().should('include', 'completed');
        cy.get('.page-title h1').should('have.text', 'Thank you');
        cy.get('.title > strong').should('have.text', 'Your order has been successfully processed!');
    });
});
