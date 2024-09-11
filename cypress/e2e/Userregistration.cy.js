describe('User Registration', () => {
    
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/register');
    });

    function generateRandomEmail() {
        const timestamp = new Date().getTime();
        return `testuser_${timestamp}@gmail.com`;
    }

    it('should successfully register a user with valid inputs using a random email', () => {
        const randomEmail = generateRandomEmail();
        cy.get('#gender-male').check();
        cy.get('#FirstName').type('Kansha');
        cy.get('#LastName').type('Saragada');
        cy.get('#Email').type(randomEmail);
        cy.get('#Password').type('password123');
        cy.get('#ConfirmPassword').type('password123');
        cy.get('#register-button').click();
        cy.get('.result').should('contain', 'Your registration completed');
        cy.url().should('include', '/registerresult');
        
    });

    it('should display error messages for invalid inputs', () => {
        // Leave all fields blank and submit
        cy.get('#register-button').click();
        
        // Verify error messages for all required fields
        cy.get('span[data-valmsg-for="FirstName"]').should('contain', 'First name is required.');
        cy.get('span[data-valmsg-for="LastName"]').should('contain', 'Last name is required.');
        cy.get('span[data-valmsg-for="Email"]').should('contain', 'Email is required.');
        cy.get('span[data-valmsg-for="Password"]').should('contain', 'Password is required.');
        cy.get('span[data-valmsg-for="ConfirmPassword"]').should('contain', 'Password is required.');

        // Test invalid email
        cy.get('#Email').type('invalid-email');
        cy.get('#register-button').click();
        cy.get('span[data-valmsg-for="Email"]').should('contain', 'Wrong email');

        // Test password mismatch
        cy.get('#Password').type('password123');
        cy.get('#ConfirmPassword').type('differentpassword');
        cy.get('#register-button').click();
        cy.get('span[data-valmsg-for="ConfirmPassword"]').should('contain', 'The password and confirmation password do not match.');
    });
});
