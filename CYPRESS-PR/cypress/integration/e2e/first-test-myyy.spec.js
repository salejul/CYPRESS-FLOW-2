describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('/')
        cy.title().should('eq', 'React App')
        cy.get('[href="/example-1"] > .sc-VigVT').click()
        cy.get('h1').invoke('text').should('eq', 'My Awesome Web Application')
    })
})


describe('Max char input Example 2', () => {
    it('Displays the appropriate remaining characters count', () => {
        cy.visit('/')
        cy.title().should('eq', 'React App')
        cy.get('[href="/example-2"] > .sc-VigVT').click()
        cy.get('span').invoke('text').should('eq', '15')
        cy.get('input').type('ABCDEFGHI...')
        cy.get('span').invoke('text').should('eq', '3')
        cy.get('input').type('...')
        cy.get('span').invoke('text').should('eq', '0')
    })
})

describe('Max char input Example 3', () => {
    it('Displays the appropriate remaining characters count', () => {
        cy.visit('/')
        cy.title().should('eq', 'React App')
        cy.get('[href="/example-3"] > .sc-VigVT').click()
        cy.url().should('include', '/example-3')

        cy.get('[data-cy="first-name-chars-left-count"]').as('FNameCharsCount')
        cy.get('[data-cy="last-name-chars-left-count"]').as('LNameCharsCount')
        cy.get('[data-cy="input-first-name"]').as('FNameInput')
        cy.get('[data-cy="input-last-name"]').as('LNameInput')

        cy.get('@FNameCharsCount').invoke('text').should('eq', '15')
        cy.get('@LNameCharsCount').invoke('text').should('eq', '15')
        cy.get('@FNameInput').type('ABCDEFGHI...')
        cy.get('@LNameInput').type('ABCDEFGHI...')
        cy.get('@FNameCharsCount').invoke('text').should('eq', '3')
        cy.get('@LNameCharsCount').invoke('text').should('eq', '3')
        cy.get('@FNameInput').type('...')
        cy.get('@LNameInput').type('...')
        cy.get('@FNameCharsCount').invoke('text').should('eq', '0')
        cy.get('@LNameCharsCount').invoke('text').should('eq', '0')

    })
})

