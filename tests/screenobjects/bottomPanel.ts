import { SELECTORS } from "../helpers/selectors";

class BottomPanel { 
    get menuButtonElem () {
        return $(SELECTORS.menuButtonSelector)
    }

    async clickOnMenu (){ 
       await (await this.menuButtonElem).waitForDisplayed()
       await (await this.menuButtonElem).click()
    }

}

export const bottomPanel = new BottomPanel()