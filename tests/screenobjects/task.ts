import { SELECTORS } from "../helpers/selectors"

class Task { 
    
    public async closeTask () {
        let checkBox = await $(SELECTORS.checkboxSelector)
        await checkBox.click()
    } 
}

export const taskObj = new Task ()