
import Login from "../PageObjects/Login.js"

//Successful login
const loginobject = new Login();

Cypress.Commands.add('successfull_Login', () => {
   
    cy.fixture('LoginFixture').then((data) =>{
      
        
        
        loginobject.clearEmail()
        loginobject.clearPassword()
        loginobject.setEmail(data.Email)
        loginobject.setPassword(data.Password)
        loginobject.clickLoginButton()
        cy.wait(5000)
        loginobject.verifyLogin()
        cy.wait(5000)
        
    
        })
    
 
   
  });

  Cypress.Commands.add('Logout',()=>{

    loginobject.clickProfile()

    cy.wait(2000)

    loginobject.clickSignout()

    loginobject.verifyLogout()

  });
  
  