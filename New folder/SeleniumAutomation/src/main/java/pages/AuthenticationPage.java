package pages;

import helper.Waits;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AuthenticationPage extends Page {

    private final By email = By.id("email");
    private final By password = By.id("passwd");
    private final By submitLoginButton = By.id("SubmitLogin");
    private final By headerLogo = By.id("header_logo");
    private final By errorMessages = By.className("alert-danger");

    public AuthenticationPage(WebDriver driver) {
        super(driver);
    }

    public Page logIn(String email, String password) {
        Waits.wait(500,driver);
        driver.findElement(this.email).sendKeys(email);
        driver.findElement(this.password).sendKeys(password);
        driver.findElement(this.submitLoginButton).click();

        if (driver.findElements(errorMessages).stream().anyMatch(WebElement::isDisplayed)) {
            return new AuthenticationPage(driver);
        }

        driver.findElement(this.headerLogo).click();
        return new HomePage(driver);
    }

    public String getLoginErrorMessage() {
        return driver.findElements(this.errorMessages)
                .stream().filter(WebElement::isDisplayed)
                .findAny()
                .get().getText();
    }
}
