describe('Cura App tests', () => {
    before(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.contains('Make Appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    })

    it('Should make an appointment', () => {
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check()
        cy.get('#radio_program_medicaid').check()
        cy.get('#txt_visit_date').type('11/12/2020{esc}')
        cy.get('#txt_comment').type('My comment')
        cy.get('#btn-book-appointment').click()
    })

    it('Should validate successful reservation', () => {
        cy.get('h2').invoke('text').should('eq', 'Appointment Confirmation')
        //cy.screenshot()
        cy.get('#menu-toggle > .fa').click()
        cy.get(':nth-child(6) > a').click()
    })
})
