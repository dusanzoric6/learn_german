package base;

import org.testng.Assert;
import org.testng.annotations.Test;
import pages.AuthenticationPage;
import pages.HomePage;

import static org.testng.Assert.assertTrue;

public class LoginTest extends TestBase {

    @Test
    public void LoginPositiveTest() {

        AuthenticationPage authenticationPage = homePage.clickSingIn();
        homePage = (HomePage) authenticationPage.logIn(ACCOUNT_EMAIL, ACCOUNT_PASSWORD);
        Assert.assertEquals(homePage.getLoginAccountName(), "Dusan Zoric");
    }

    @Test
    public void LoginNoEmailTest() {

        AuthenticationPage authenticationPage = homePage.clickSingIn();
        authenticationPage = (AuthenticationPage) authenticationPage.logIn("", ACCOUNT_PASSWORD);
        assertTrue(authenticationPage.getLoginErrorMessage().contains("An email address required."));
    }

    @Test
    public void LoginNoPasswordTest() {

        AuthenticationPage authenticationPage = homePage.clickSingIn();
        authenticationPage = (AuthenticationPage) authenticationPage.logIn(ACCOUNT_EMAIL, "");
        assertTrue(authenticationPage.getLoginErrorMessage().contains("Password is required."));
    }

    @Test
    public void LoginInvalidPasswordTest() {

        AuthenticationPage authenticationPage = homePage.clickSingIn();
        authenticationPage = (AuthenticationPage) authenticationPage.logIn(ACCOUNT_EMAIL, "1");
        assertTrue(authenticationPage.getLoginErrorMessage().contains("Invalid password"));
    }

    @Test
    public void AuthenticationFailedTest() {

        AuthenticationPage authenticationPage = homePage.clickSingIn();
        authenticationPage = (AuthenticationPage) authenticationPage.logIn(ACCOUNT_EMAIL, "aaaaaaaaaaa");
        assertTrue(authenticationPage.getLoginErrorMessage().contains("Authentication failed"));
    }
}
