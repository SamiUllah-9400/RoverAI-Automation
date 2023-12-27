import Login from "../PageObjects/Login.js"

describe('Login Test Suite', () => {
  it('Successful login with valid credentials', () => {
    cy.visit('https://rover-frontend-dev.azurewebsites.net/auth/login')
    
    cy.successfull_Login();
    
    
    
  })

  it('Successful logout after login', () => {
    cy.visit('https://rover-frontend-dev.azurewebsites.net/auth/login')
    
    cy.successfull_Login();
    
    cy.Logout();
    
  })
 
  it('unsuccessful login with valid email and invalid password', () => {
    cy.visit('https://rover-frontend-dev.azurewebsites.net/auth/login')
    
    cy.successfull_Login();
    
    cy.Logout();
    
  })

})