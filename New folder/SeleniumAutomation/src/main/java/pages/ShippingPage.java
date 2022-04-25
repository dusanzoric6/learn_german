package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ShippingPage extends Page{

    private final By proceedToCheckoutButton = By.xpath("//button[contains(@name,'processCarrier')]");
    private final By termsAndConditionsButton = By.id("uniform-cgv");

    public ShippingPage(WebDriver driver) {
        super(driver);
    }

    public void agreeOnTermsAndConditions() {
        driver.findElement(this.termsAndConditionsButton).click();
    }

    public PaymentPage proceedToCheckout() {
        driver.findElement(this.proceedToCheckoutButton).click();

        return new PaymentPage(driver);
    }
}
