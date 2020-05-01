describe('Find', () => {
    it('Tests find', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1').find('tbody > tr').first().find('td').find('a').first().click()
        cy.url('match', '#edit')

        cy.get('#table1').find('tbody > tr').each(($element, $index, $data) => {
            cy.log(`TR element text is: ${$element.text()} with the index of: ${$index + 1} and data:::: <${$data.text()}>`)
        }).then($data => {
            //expect($data).to.have.length(4)
            cy.wrap($data).should('have.length', 4)
        })
    })
})
