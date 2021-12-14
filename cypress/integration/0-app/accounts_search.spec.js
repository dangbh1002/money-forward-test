describe('Accounts Search', () => {

    it('Should render accounts page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/accounts')

        cy.get('h2').contains('Accounts Search')
    })


    it('Should submit account search form', () => {
        // Search account ID = 1
        cy.get('input').type(1)

        // Click search button
        cy.get('button').click()

        // Wait API call
        cy.wait(3000)

        // Show Account Detail result
        cy.get('.detail h3').contains('Account Detail')
    })


    it('Should show users detail data', () => {
        // Show User Detail result
        cy.get('.detail p').eq(0).contains('ID: 1')
        cy.get('.detail p').eq(1).contains('Name: A銀行')
        cy.get('.detail p').eq(2).contains('Balance: 20,000')
        cy.get('.detail p').eq(3).contains('User ID: 1')
    })


    it('Should go to user accounts page', () => {
        cy.get('a[href="/users/1"]').click()
        cy.url().should('include', '/users/1')
    })


    it('Should show user accounts table with 3 items', () => {
        cy.get('table tbody').find('tr').should('have.length', 3)
    })

})
