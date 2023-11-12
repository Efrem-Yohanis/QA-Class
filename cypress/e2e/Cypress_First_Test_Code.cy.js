describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

//Example with nameless function.

describe('template spec', function(){
 it('passes', function(){
    cy.visit('https://example.cypress.io')
 })
})

//Example using skiping describe block.

describe.skip('template spec', function(){
  it('passes', function(){
   cy.visit('https://example.cypress.io')
  })
})

// Example using skiping it block.

describe('template spec', function(){
  it.skip('passes', function(){
  cy.visit('https://example.cypress.io')
  })
})

// Example using only describe block.
describe.only('template spec', function(){
    it('passes', function(){
     cy.visit('https://example.cypress.io')
     })
  })

  // Example using only in it block.

describe('template spec', function(){
 it.only('passes', function(){
  cy.visit('https://example.cypress.io')
  })
})