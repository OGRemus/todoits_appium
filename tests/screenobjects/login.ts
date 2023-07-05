import { SELECTORS } from "../helpers/selectors"
require('dotenv').config()


class Login {
    private mail:any = process.env.email
    private password:any = process.env.pass
    get emailFieldElem () {
        return $(SELECTORS.emailFieldSelector)
    }

    get passFieldElem () { 
        return $(SELECTORS.passwordFieldSelector)
    }

    get forms () {
        return $$(SELECTORS.formSelector)
    }

    get loginButtonElem () { 
        return $(SELECTORS.loginButtonSelector)
    }

    async fillLoginFields () {
        await (await this.emailFieldElem).click()
        await driver.sendKeys([this.mail])
        await driver.hideKeyboard()
        await (await this.passFieldElem).click()
        await driver.sendKeys(this.password)
        await driver.hideKeyboard()
    }

    async clickOnLogin (){ 
        await (await this.loginButtonElem).click()
    }
}

export const login = new Login()