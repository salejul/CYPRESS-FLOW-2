describe('Fake test suite', () => {
    it('Fake test case', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.server()

        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: {
                error: "Whoaaa this is not supposed to happen!"
            },
            delay: 1000
        }).as('update_comment')

        cy.get('.network-put').click()

        cy.wait('@update_comment')
        cy.get('.network-put-comment').should('contain', 'Whoaaa this is not supposed to happen!')
    })
})

describe('Actual test suite', () => {
    it('Should make successful API test', () => {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium automation",
            "isbn": "bcdsss",
            "aisle": "22s7",
            "author": "John Doe"
        }).then(response => {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.be.eq(200)
        })
    })
})

