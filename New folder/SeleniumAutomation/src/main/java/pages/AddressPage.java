package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AddressPage extends Page{

    private final By proceedToCheckoutButton = By.xpath("//button[contains(@name,'processAddress')]");

    public AddressPage(WebDriver driver) {
        super(driver);
    }

    public ShippingPage proceedToCheckout() {
        driver.findElement(this.proceedToCheckoutButton).click();

        return new ShippingPage(driver);
    }
}
