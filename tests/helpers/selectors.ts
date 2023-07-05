export const SELECTORS = {
    // start screen
    signInOptionsSelector: "id=com.todoist:id/more_signin_options",
    emailLoginSelector: "id=com.todoist:id/email_login",
    dismissGoogleLogin: '//android.widget.LinearLayout[@content-desc="Choose an Account"]/android.widget.LinearLayout/android.widget.Button',
	

    // login screen
    emailFieldSelector: 'id=com.todoist:id/email' ,//"id=email",
    passwordFieldSelector: "id=todoist:id/password",
    formSelector: '//android.widget.EditText',
    loginButtonSelector: "id=auth_button_tag",

    // taskComponent
    taskListSelector: "id=root",
    taskSelector: "id=item",
    checkboxSelector: "id=checkmark",

    //bottombar
    bottomBarSelector: "bottom_app_bar",
    menuButtonSelector: "~Menu",


}