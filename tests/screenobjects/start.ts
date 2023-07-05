import { SELECTORS } from "../helpers/selectors"



class StartScreen {
    get signInOptionsElem () {
        return  $(SELECTORS.signInOptionsSelector)
    }

    get emailSignIn () {
        return $(SELECTORS.emailLoginSelector) 
    }
    async clickOnMoreOptions  () { 
        let signInOpt = await this.signInOptionsElem
        await signInOpt.waitForDisplayed()
        await signInOpt.click()
    }

    async chooseEmailOption (){ 
        let emailSingIn = await this.emailSignIn
        await emailSingIn.waitForDisplayed()
        await emailSingIn.click()
    }

    async dismissGoogleLogin () {
        await (await $(SELECTORS.dismissGoogleLogin)).waitForDisplayed()
        await (await $(SELECTORS.dismissGoogleLogin)).click()
    }
}

    
    
    
export const startScreen = new StartScreen()