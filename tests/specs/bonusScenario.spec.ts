import { login } from "../screenobjects/login";
import { startScreen } from "../screenobjects/start";
import { bottomPanel } from "../screenobjects/bottomPanel";
import { api } from "../helpers/ApiUtils";
import { taskObj } from "../screenobjects/task";
import { SELECTORS } from "../helpers/selectors";
describe('Bonus scenario', () => {
    let task:any
    it('Should create a project and a task via api', async () => {
        task = await api.createTask()
    });

    it('Should choose login with email and pass', async () => {
        await startScreen.clickOnMoreOptions()
        await startScreen.chooseEmailOption()
        await startScreen.dismissGoogleLogin()
    });

    it('Should login', async () => {
        await login.fillLoginFields()
        await login.clickOnLogin()
    });

    it('Should select the existing project and mark task as done', async () => {
        await bottomPanel.clickOnMenu()
        let project = await $(`android=new UiSelector().textContains("Mobile project")`)
        expect(await project.isDisplayed()).toBeTruthy()
        await project.click()
        let taskText = await $('id=text')
        expect(await taskText.isDisplayed()).toBeTruthy()
        expect(await taskText.getText()).toContain('Mobile Task')
        await taskObj.closeTask()
        await api.reopenTask(task.id)
        expect((await $(SELECTORS.taskSelector)).isDisplayed()).toBeTruthy()
         
    });
    
});

