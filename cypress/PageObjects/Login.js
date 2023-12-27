class Login {
    
    txtEmail = "input[name='email']";
    txtPassword = "input[name='password']";
    btnLogin = "button[class='login-btn']";
    labelDashboard = "span[class='menu-title']";
    clickProfileicon = '#kt_app_header_wrapper > app-navbar > div:nth-child(4) > div'
    btnSignout = 'a:contains("Sign Out")'
    labelLogin  = 'h1'


    setEmail(email){
        
        cy.get(this.txtEmail).type(email);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickLoginButton(){
      cy.get(this.btnLogin).click()    
    }

    verifyLogin(){
        cy.get(this.labelDashboard).should("contain","Dashboard")
    }

    clearEmail(){
        cy.get(this.txtEmail).clear();
    }

    clearPassword(){
        cy.get(this.txtPassword).clear();
    }

    clickProfile(){
        cy.get(this.clickProfileicon).click({force:true})
    }

    clickSignout(){
        cy.get(this.btnSignout).click()
    }

    verifyLogout(){

        cy.get(this.labelLogin).should("contain","Welcome Back!")

    }
}

export default Login;