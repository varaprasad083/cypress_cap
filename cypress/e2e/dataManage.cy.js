describe('Data Management', () => {

    it('Use fixtures to manage test data', ()=>{

    cy.visit('https://demowebshop.tricentis.com/')

    cy.fixture('loginfix').then( (data)=>{

    cy.login(data.uname,data.pass)

    cy.get('.topic-html-content-header').should('contain.text',data.result)

    })

    })
})



