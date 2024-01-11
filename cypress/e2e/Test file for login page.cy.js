describe('Testing login functinalty', () => {
  it('Verify that a user can successfully log in with valid credentials.', () => {
     // Visit the login page
    cy.visit('https://end-to-end-v1.onrender.com/')
     // Enter valid username
    cy.get('#username').type('test')
     // Enter valid password
    cy.get('#password').type('test')
     // Click on the login button
    cy.get('button').click()
    // Assert that the URL has changed to the home page URL
    cy.url().should('eq', 'https://end-to-end-v1.onrender.com/home/')

  })

  it('Verify that the system behavior with an invalid username and valid password.', () => {
      // Visit the login page
      cy.visit('https://end-to-end-v1.onrender.com/')
      // Enter invalid username
     cy.get('#username').type('invalidusername')
      // Enter valid password
     cy.get('#password').type('test')
      // Click on the login button
     cy.get('button').click()
     // Assert that the error message is displayed
    cy.get('.error').should('contain','Invalid credentials')
     // Assert that the user remains on the login page
    cy.url().should('eq', 'https://end-to-end-v1.onrender.com/')
  })
  it('Verify that the system behavior with an valid username and invalid password.', () => {
    // Visit the login page
    cy.visit('https://end-to-end-v1.onrender.com/')
    // Enter valid username
   cy.get('#username').type('test')
    // Enter invalid password
   cy.get('#password').type('invalidpassword')
    // Click on the login button
   cy.get('button').click()
   // Assert that the error message is displayed
  cy.get('.error').should('contain','Invalid credentials')
   // Assert that the user remains on the login page
  cy.url().should('eq', 'https://end-to-end-v1.onrender.com/')
})

it('Verify that the system behavior with an invalid username and invalid password.', () => {
  // Visit the login page
  cy.visit('https://end-to-end-v1.onrender.com/')
  // Enter invalid username
 cy.get('#username').type('invalidusername')
  // Enter invalid password
 cy.get('#password').type('invalidpassword')
  // Click on the login button
 cy.get('button').click()
 // Assert that the error message is displayed
cy.get('.error').should('contain','Invalid credentials')
 // Assert that the user remains on the login page
cy.url().should('eq', 'https://end-to-end-v1.onrender.com/')

})


})