describe('Users Search', () => {

    it('Should redirect to users page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // The new url should include "/users"
        cy.url().should('include', '/users')

        cy.get('h2').contains('Users Search')
    })


    it('Should submit users search form', () => {
        // Search user ID = 1
        cy.get('input').type(1)

        // Click search button
        cy.get('button').click()

        // Wait API call
        cy.wait(3000)

        // Show User Detail result
        cy.get('.detail h3').contains('User Detail')
    })


    it('Should show users detail data', () => {
        // Show User Detail result
        cy.get('.detail p').eq(0).contains('ID: 1')
        cy.get('.detail p').eq(1).contains('Name: Alice')
    })


    it('Should go to user accounts page', () => {
        cy.get('a[href="/users/1"]').click()
        cy.url().should('include', '/users/1')
    })


    it('Should show user accounts table with 3 items', () => {
        cy.get('table tbody').find('tr').should('have.length', 3)
    })

})
