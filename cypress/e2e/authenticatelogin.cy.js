describe('Authentication login using token', () => {
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/login');
    });

    it('  Authenticate  login', () => {
 
        const initialEmail = 'thee_vara@gmail.com';
        const initialPassword = 'Kansha@123';

        cy.window().then((win) => {
            const token = { email: initialEmail, password: initialPassword };
            win.localStorage.setItem('Token', JSON.stringify(token));
            console.log('Initial credentials set in local storage');
        });
     
        cy.login(initialEmail , initialPassword);
    
        cy.window().then((win) => {
            const token = JSON.parse(win.localStorage.getItem('Token'));

            if (token && token.email && token.password) {
                cy.login(token.email, token.password);
            } else {
                throw new Error('Credentials not found in local storage.');
            }
        });

        
        cy.get('.account').should('contain.text', 'thee_vara@gmail.com');
        cy.get('.ico-logout').should('contain', 'Log out').click();

    
    });
});
